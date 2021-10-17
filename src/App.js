
import React, {useState, useEffect} from 'react'
import Header from './components/Header'
import './App.css'
import CardList from './components/CardList'
import SearchForm from './components/SearchForm'
import axios from 'axios'



const App = () => {

    const [actors, setActors] = useState([])
    const [loading, setLoading] = useState(true)
    const [query, setQuery] = useState('')

    const fetchActors = async () => {
        const res = await axios.get(`https://www.breakingbadapi.com/api/characters?name=${query}`)
        
        setActors(res.data)
        setLoading(false)
       // console.log(actors)

    }

    useEffect( () => {
        fetchActors()
    }, [query])

  
    //console.log(actors)

    return (
        <div className= "container">
            <Header />
            <SearchForm getQuery = {(q) => setQuery(q)}/>
            <CardList actors = {actors} loading = { loading } />
        </div>
    )
}

export default App

