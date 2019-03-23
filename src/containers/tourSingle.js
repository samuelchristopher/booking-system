import React from "react"
import { Router } from "@reach/router"
import TourSinglePage from "../pages/tourSinglePage"

const tourSingleContainer = () => (
    <div>
        <Router>
            <TourSinglePage path=":tourPath" />
        </Router>
    </div>
)

export default tourSingleContainer