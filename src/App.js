import React from 'react'
import { Router, Link } from 'react-static'
//
import Routes from 'react-static-routes'

import './styles/main.css'
import './styles/base.css'

export default () => (
  <Router>
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/blog">Blog</Link>
        <a href="/admin">CMS Admin</a>
      </nav>
      <div className="content">
        <Routes />
      </div>
    </div>
  </Router>
)
