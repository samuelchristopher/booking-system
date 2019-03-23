import React from "react"
import TourCard from "../components/tourCard"


const allToursRender = ({ data }) => {
    let tourCards = Object.keys(data).map((slug, key) => {
        let tourCard = data[slug]
        if (tourCard.imgone) {
            return (
              <TourCard
                title={tourCard.title}
                link={tourCard.path}
                key={key}
                img={tourCard.imgone}
              />
            )
        }
        return (
          <TourCard
            title={tourCard.title}
            link={tourCard.path}
            key={key}
            img="https://images.unsplash.com/photo-1551446591-142875a901a1?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=750&amp;q=80"
          />
        )
    })

    return (
        <div>
            <header>
                <h1 className="capitalize__heading">All tours</h1>
                <p className="shifted-to-the-right tagline">Find the package that is perfect for you</p>
            </header>
            <div className="tour-cards-container">
                {tourCards}
            </div>
        </div>
    )
}

export default allToursRender