import React from 'react'
import { Router, Link } from 'react-static'
import Layout from './components/layout'
import Routes from 'react-static-routes'

import './styles/main.css'
import './styles/base.css'

export default () => (
  <Router>
    <Layout>
      <div className="content">
        <Routes />
      </div>
    </Layout>
  </Router>
)
