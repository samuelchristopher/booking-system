import React from "react"
import Layout from "../components/layout"
import Details from "../components/details"
import { Helmet } from "react-helmet"

class Template extends React.Component {
    render() {
        return (
            <Layout>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>title | Grace Travel</title>
                    {/* <title>{title} | Grace Travel</title> */}
                </Helmet>
                {/* <Details imgtwo={imgtwo} imgthree={imgthree} price={price} included={included} notIncluded={notIncluded} imgone={imgone} itineraryList={itineraryList} itineraryUrl={itineraryUrl} minage={minage} mingroup={mingroup} travelstyle={travelstyle} starts={starts} title={title} ends={ends} destinations={destinations} highlights={highlights} /> */}
            </Layout>
        )
    }
    // const { title, starts, ends, destinations, highlights, minage, mingroup, travelstyle, itinerary_url: itineraryUrl, itinerary: itineraryList, imgone, included, not_included: notIncluded, price, imgtwo, imgthree } = frontmatter
}

export default Template