import React, {useState} from 'react'

const SearchForm = ({getQuery}) => {

    const [query, setQuery] = useState('')

    const onChange = (q) => {
        setQuery(q)
        getQuery(q)
    }
    

    return (
        <input placeholder = "Search..." alt ="Search" type="text"
            className="form-control"
            onChange = {(e) => onChange(e.target.value)}
            autoFocus
        />
    )
}

export default SearchForm
