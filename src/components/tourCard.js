import React from "react"
import styles from "./tour-card.css"
import { Link } from "react-static"

const TourCard = ({ title, link, img }) => {
    return (
        <div className="tour-card">
            <div className="tour-card__push-down"></div>
            <div className="tour-card__info-container">
                <div className="tour-card__title">{title}</div>
                <Link className="tour-card__learn-more-button" to={link}>learn more</Link>
            </div>
            <div className="tour-card__bg-blur"></div>
            <img className="tour-card__bg-image" src={img} />
        </div>
    )
}

export default TourCard