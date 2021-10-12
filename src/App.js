import React, {useState, useEffect} from 'react'
import './App.css'
import Header from './components/Header'
import CharacterGrid from './components/CharacterGrid'
import SearchForm from './components/SearchForm'
import axios from 'axios'


const App = () => {

  const [characters, setCharacters] = useState([])
  const [query, setQuery] = useState('')
  const [isLoading, setIsLoading] = useState(true)


  const fetchCharacters = async () => {
    const response = await axios.get(`https://www.breakingbadapi.com/api/characters?name=${query}`)
    console.log(response.data)
    setCharacters(response.data)
    setIsLoading(false)
  }
  
  useEffect(() => {
    
    fetchCharacters()
    //etCharacters(response.data)

  }, [query])

  return (
    <div className="container">
      <Header />
      <SearchForm getQuery = {(q)=> setQuery(q)} />
      <CharacterGrid characters = {characters} isLoading={isLoading}/>
    </div>
  );
}

export default App;
