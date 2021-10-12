import React, {useState, useEffect} from 'react'
import './App.css'
import Header from './components/UI/Header'
import CharacterGrid from './components/characters/CharacterGrid'
import Search from './components/UI/Search'
import axios from 'axios'


const App = () => {

  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [query, setQuery] = useState('')


  useEffect(()=>{
      const fetchItems = async () => {
        const result = await axios.get(`https://www.breakingbadapi.com/api/characters?name=${query}`)

        console.log(result.data)
        setItems(result.data)
        setIsLoading(false)
      }
      fetchItems()
  }, [query])


  return (
    <div className="container">
      <Header />
      <Search getQuery = {(q)=> setQuery(q)}/>
      <CharacterGrid  items={items} isLoading={isLoading} />
    </div>
  );
}

export default App;
