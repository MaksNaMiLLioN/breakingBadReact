import React from 'react'
import CharactersItems from './CharactersItems'
import Spinner from './Spinner'

const CharacterGrid = ( { characters, isLoading } ) => {
    return (
        isLoading 
        ? <Spinner/>
        : <section className="cards">
           { characters.map((character)=> (
           <CharactersItems character = {character} ></CharactersItems>))
            }  
        </section>

    )
}

export default CharacterGrid
