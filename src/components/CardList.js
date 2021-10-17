import React, { useState, useEffect } from 'react'
import CardItem from './CardItem'
import spinner from '../img/spinner.gif'

const CardList = ({ actors, loading }) => {



    return (
        loading 
        ? <img className="center" src = {spinner } style = {{display:'block', margin: 'auto'}}/>
        : <div className="cards">
             {actors.map(actor => (
                 <CardItem key={actor.char_id} actor = {actor} />
             ))}
          </div>
    )
}

export default CardList
