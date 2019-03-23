import React from 'react'
import axios from 'axios'

// for reading markdown
import fs from 'fs'
import vfile from 'to-vfile'
import report from 'vfile-reporter'
import unified from 'unified'
import parse from 'remark-parse'
import stringify from 'remark-stringify'
import frontmatter from 'remark-frontmatter'
import matter from 'gray-matter'

import * as firebase from 'firebase'
import 'firebase/database'

let config = {
  apiKey: "AIzaSyB1x4Xulggn_lzxi1JEveDF7jjohoU_wFs",
  authDomain: "gtabook.firebaseapp.com",
  databaseURL: "https://gtabook.firebaseio.com",
  projectId: "gtabook",
  storageBucket: "gtabook.appspot.com",
  messagingSenderId: "242321135368"
}

firebase.initializeApp(config)


const readFiles = (dirname, onFileContent, onError) => {
  fs.readdir(dirname, function (err, filenames) {
    if (err) {
      onError(err);
      return;
    }
    filenames.forEach(function (filename) {
      fs.readFile(dirname + filename, 'utf-8', function (err, content) {
        if (err) {
          onError(err);
          return;
        }
        onFileContent(filename, content);
      });
    });
  });
}

readFiles('content/tours/', function (filename, content) {
  console.log(filename)
  unified()
    .use(parse)
    .use(stringify)
    .use(frontmatter, ['yaml', 'toml'])
    .process(vfile.readSync(`./content/tours/${filename}`), function (err, file) {
      if (err) {
        return console.error(report(err))
      }
      let { data: tourData } = matter(String(file))
      return firebase.database().ref(`${tourData.path}`).set({
        ...tourData
      });
      
    })
}, function (err) {
  throw err;
});



export default {
  getRoutes: async () => {
    const { data: posts } = await axios.get('https://jsonplaceholder.typicode.com/posts')
    return [
      {
        path: '/',
        component: 'src/containers/Home',
      },
      {
        path: '/about',
        component: 'src/containers/About',
      },
      {
        path: '/blog',
        component: 'src/containers/Blog',
        getData: () => ({
          posts,
        }),
        children: posts.map(post => ({
          path: `/post/${post.id}`,
          component: 'src/containers/Post',
          getData: () => ({
            post,
          }),
        })),
      },
      {
        is404: true,
        component: 'src/containers/404',
      },
    ]
  },
  Document: class CustomHtml extends React.Component {
    render () {
      const { Html, Head, Body, children, renderMeta } = this.props

      return (
        <Html>
          <Head>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            {renderMeta.styleTags}
            <script src="https://identity.netlify.com/v1/netlify-identity-widget.js" />
          </Head>
          <Body>{children}</Body>
        </Html>
      )
    }
  },
}
