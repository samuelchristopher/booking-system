import React from 'react'
import * as firebase from 'firebase'
import 'firebase/database'
import DateList from '../components/dateList'

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
    let dateLists = {}
    if (this.state.bookings) {
      dateLists = Object.keys(this.state.bookings).map((date, key) => {
        let dateListItems = this.state.bookings[date]
        return <DateList key={key} dateListItems={dateListItems} date={date}/>
      })
    }
    return (
      <div>
        <h1>booking list</h1>
        {dateLists ? dateLists : ''}
      </div>
    )
  }
}

export default BookingList
