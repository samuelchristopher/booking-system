import React from "react";
// import { Router, Link } from "react-static";
import { Router } from "@reach/router"
import Layout from "./components/layout";
import ToursSingle from "./pages/tourSinglePage";
//
import Routes from "react-static-routes";

import "./styles/main.css";
import "./styles/base.css";

export default () => (
  <Router>
    <Layout path="/">
      <Routes default/>
      <ToursSingle path="/tour/:tourPath" />
    </Layout>
  </Router>
);

// import React from 'react'
// import { Router, Link } from 'react-static'
// import Layout from './components/layout'
// import ToursSingle from './pages/tourSinglePage'
// import Routes from 'react-static-routes'

// import './styles/main.css'
// import './styles/base.css'

// export default () => (
//   <Router>
//     <Layout>
//       <nav>
//         {/* <Link to="/">Home</Link>
//         <Link to="/about">About</Link>
//         <Link to="/blog">Blog</Link>
//         <a href="/admin">CMS Admin</a> */}
//       </nav>
//       <div className="content">
//         <Routes />
//         <ToursSingle path="/tour/:tourPath" />
//       </div>
//     </Layout>
//   </Router>
// )
