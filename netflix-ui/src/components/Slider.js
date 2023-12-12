import React from 'react'
import CardSlider from './CardSlider'

export default React.memo(function Slider({movies}) {
    const getMvoviesFromRange = (from,to) =>{
        return movies.slice(from,to);
    }
  return (
    <div>
        <CardSlider title = "Trending Now" data = {getMvoviesFromRange(0,10)}/>
        <CardSlider title = "New Releases" data = {getMvoviesFromRange(10,20)}/>
        <CardSlider title = "Blockbuster Movies" data = {getMvoviesFromRange(20,30)}/>
        <CardSlider title = "Populer on Nerflix" data = {getMvoviesFromRange(30,40)}/>
        <CardSlider title = "Action Movies" data = {getMvoviesFromRange(40,50)}/>
        <CardSlider title = "Epics" data = {getMvoviesFromRange(50,60)}/>

    </div>
  )
})