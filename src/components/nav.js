import React from "react"
import "./nav.css"


const Nav = () => {
    return (
        <div className="mobile-nav">
            <a className={styles.logo} style={{ margin: '0 auto' }} href="/" />
            {/* <a className={styles.menuButton} href="#" /> */}
        </div>
        // <div className="mobile-nav">
        //   <a className={styles.logo} href="/" />
        //   <a className={styles.menuButton} href="#" />
        // </div>
    )
}

export default Nav