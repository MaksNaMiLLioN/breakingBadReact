import React from 'react'
import CharactersItems from './CharactersItems'
import spinner from '../img/spinner.gif'

const CharacterGrid = ( { characters, isLoading } ) => {
    return (
        isLoading 
        ? <img src = { spinner } style = {{ width: '200px', margin: 'auto', display: 'flex' }}/>
        : <section className="cards">
           { characters.map((character)=> (
           <CharactersItems character = {character} ></CharactersItems>))
            }  
        </section>

    )
}

export default CharacterGrid
