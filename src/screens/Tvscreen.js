import React from 'react'
import Nav from "../Nav"
import Banner from "../Banner"
import Row from "../Row"
import Footer from "../footer"
import "./Tvscreen.css"
import requests from '../Requests'
function Tvscreen() {
    return (
        <div>
            <Nav/>
            <Banner/>
            <Row title = "NetFlix Originals"
            fetchUrl = { requests.fetchNetflixOriginalsTv}
            isLargeRow/>
            <Row title = "Top Rated Animes"
            fetchUrl = { requests.fetchTopRatedTV}/>
            <Row title = "Tv Action And Adventure"
            fetchUrl = { requests.fetchActionMoviesTv}/>
            <Row title = "Tv Comedies"
            fetchUrl = { requests.fetchComedyTv}/>
            <Row title = "Horror Series"
            fetchUrl = { requests.fetchHorrorTv}/>
            <Row title = "Romance Tv Shows"
            fetchUrl = { requests.fetchRomanceTv}/>
            <Footer/>
        </div>
    )
}

export default Tvscreen
