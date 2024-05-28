import React from "react";

import Banner from "../Banner/Banner";
import List from "../List/List";

const HomeComponent = () => {


  
    return(
        <>
        <div className="Home-container">
            
        <Banner />
  
        <List title="Netflix Originals" param="originals"/>
              <List title="Trending Now" param="trending"/>
              <List title="Now Playing" param="now_playing"/>
              <List title="popular" param="popular"/>
              <List title="Top Rated" param="top_rated"/>
              <List title="Upcoming" param="upcoming"/>
              </div>
        </>
    )
}

export default HomeComponent;