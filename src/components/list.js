import React from "react"
import styles from "./list.css"
import ListItem from "./listItem"

const List = ({ listItems, tick, cross }) => {
    const ListItems = listItems.map((listItem, key) => {
        let { desc, title } = listItem
        if (tick) {
            return <ListItem key={key} desc={desc} title={title} tick={true} />
        } else if (cross) {
            return <ListItem key={key} desc={desc} title={title} cross={true} />
        } else {
            return <ListItem key={key} desc={desc} title={title} />
        }
    })
    return (
        <div className={`${styles.list__expandContainer}`}>
            {/* <div className={styles.list__expandAll}>Expand all</div> */}
            {ListItems}
        </div>
    )
}

export default List