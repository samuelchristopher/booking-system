import React from "react"
import allTours from "../pages/allTours"
import * as firebase from "firebase"
import "firebase/database"
import AllToursPage from "../pages/allTours"
import Layout from "../components/layout"

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
            <Layout>
                <AllToursPage data={this.state.tours} />
            </Layout>
        )
    }
}

export default allToursContainer