import React from 'react'

let config = {
    getRoutes: async () => {
      return [
        {
          path: '/',
          component: 'src/containers/BookingList',
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

export default config