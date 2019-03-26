import React from "react"
import allTours from "../pages/allTours"
import * as firebase from "firebase"
import "firebase/database"
import AllToursPage from "../pages/allTours"

class allToursContainer extends React.Component {
    constructor() {
        super()
        this.state = {
            tours: {}
        }
    }

    componentWillMount() {
        firebase.database().ref('tour').on('value', snap => {
            this.setState({
                tours: snap.val()
            })
        })
    }

    render() {
        return (
            <AllToursPage data={this.state.tours} />
        )
    }
}

export default allToursContainer