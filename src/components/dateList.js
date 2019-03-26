import React from 'react'

class DateList extends React.Component {
    render() {
        let { dateListItems } = this.props
        let listItems = ''
        if (dateListItems) {
            listItems = Object.keys(dateListItems).map(key => {
                let item = dateListItems[key]
                return (
                    <li {...key}>
                        <div>{item.tourTitle} for {item.customerName}</div>
                    </li>
                )
            })
        }
    
        return (
            <ol>
                <h3>{ this.props.date }</h3>
                {listItems ? listItems : ''}
            </ol>
        )
    }
}

export default DateList
