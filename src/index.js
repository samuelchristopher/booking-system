import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import * as firebase from "firebase"
import "firebase/database"

let config = {
  apiKey: "AIzaSyB1x4Xulggn_lzxi1JEveDF7jjohoU_wFs",
  authDomain: "gtabook.firebaseapp.com",
  databaseURL: "https://gtabook.firebaseio.com",
  projectId: "gtabook",
  storageBucket: "gtabook.appspot.com",
  messagingSenderId: "242321135368"
};

firebase.initializeApp(config);


// Your top level component
import App from './App'

// Export your top level component as JSX (for static rendering)
export default App

// Render your app
if (typeof document !== 'undefined') {
  const renderMethod = module.hot ? ReactDOM.render : ReactDOM.hydrate
  const render = Comp => {
    renderMethod(
      <AppContainer>
        <Comp />
      </AppContainer>,
      document.getElementById('root')
    )
  }

  // Render!
  render(App)

  // Hot Module Replacement
  if (module.hot) {
    module.hot.accept('./App', () => {
      render(require('./App').default)
    })
  }

  // Netlify redirection
  if (window.netlifyIdentity) {
    window.netlifyIdentity.on('init', user => {
      if (!user) {
        window.netlifyIdentity.on('login', () => {
          document.location.href = '/admin/'
        })
      }
    })
  }
}
