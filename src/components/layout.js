import React from "react"
import Nav from "./nav"
import Footer from "./footer"

export default ({ children }) => (
    <div className="mobile-container">
        <Nav />
           {children}
        <Footer />
    </div>
)