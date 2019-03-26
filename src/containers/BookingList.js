import React from 'react'
import * as firebase from 'firebase'
import 'firebase/database'

class BookingList extends React.Component {
  constructor() {
    super()
    this.state = {
      bookings: {}
    }
  }
  componentWillMount() {
    let config = {
      apiKey: "AIzaSyB1x4Xulggn_lzxi1JEveDF7jjohoU_wFs",
      authDomain: "gtabook.firebaseapp.com",
      databaseURL: "https://gtabook.firebaseio.com",
      projectId: "gtabook",
      storageBucket: "gtabook.appspot.com",
      messagingSenderId: "242321135368"
    }
    firebase.initializeApp(config)

    let bookingsRef = firebase.database().ref('/bookings')
    bookingsRef.on('value', snap => this.setState({ bookings: snap.val() }))
  }

  render() {
    return (
      <div>
        booking list
      </div>
    )
  }
}

export default BookingList
