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

let filesCount = (dirname) => {
  fs.readdir(dirname, (err, filenames) => filenames.length)
}
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
let tourPathChildren = []
readFiles('content/tours/', function (filename, content) {
  unified()
    .use(parse)
    .use(stringify)
    .use(frontmatter, ['yaml', 'toml'])
    .process(vfile.readSync(`./content/tours/${filename}`), function (err, file) {
      if (err) {
        return console.error(report(err))
      }
      let { data: tourData } = matter(String(file))
      tourPathChildren.push({
        path: `${tourData.path}`,
        component: `src/templates/tourTemplate`,
        getData: () => ({ tourData })
      })
      console.log(tourPathChildren)
      return firebase.database().ref(`${tourData.path}`).set({
        ...tourData
      });
    })
}, function (err) {
  throw err;
})



// firebase.database().ref('tour/').on('value', snap => {
//   let toursFromFirebase = snap.val()
//   tourSinglePages = Object.keys(toursFromFirebase).map(tourSingleKey => {
//     let currentTourPageContent = toursFromFirebase[tourSingleKey]
//     return ({
//       path: `${currentTourPageContent.path}`,
//       component: 'src/templates/tourTemplate'
//     })
//   })
// })


  // children: posts.map(post => ({
  //   path: `/post/${post.id}`,
  //   component: 'src/containers/Post',
  //   getData: () => ({
  //     post,
  //   }),
  // })),
let obj = {}
do {
  obj = {
    getRoutes: async () => {
      // const { data: posts } = await axios.get('https://jsonplaceholder.typicode.com/posts')
      // const tours = {}
      // firebase.database().ref('/tour').once('value').then(function (snapshot) {
      //   tours = await snapshot.val()
      // })
      return [
        {
          path: '/',
          component: 'src/containers/Home',
        },
        {
          path: '/about',
          component: 'src/containers/About',
        },
        // {
        //   path: '/blog',
        //   component: 'src/containers/Blog',
        //   getData: () => ({
        //     posts,
        //   }),
        //   children: posts.map(post => ({
        //     path: `/post/${post.id}`,
        //     component: 'src/containers/Post',
        //     getData: () => ({
        //       post,
        //     }),
        //   })),
        // },
        {
          path: '/tours',
          component: 'src/containers/allTours',
        },
        {
          path: '/tour',
          component: 'src/templates/tourTemplate',
          children: tourPathChildren
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

}

while (tourPathChildren.length < filesCount('./content/tours'))

export default obj