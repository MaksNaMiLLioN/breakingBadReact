import React, {useState} from 'react'

const SearchForm = ( { getQuery }) => {

    //const [q, setQuery] = useState('')

    const onQuery = (e) => {
        getQuery(e)

    }


    return (
        <form className="center">
        <input className="form-control"
            type = "text"
            style= {{ width: '500px', 
            margin:'20px', 
            display: "flex",
            alignItems:"center",
            justifyContent: "center"
            }}
            onChange = {(e) => onQuery(e.target.value)}
            placeholder = "Search actor..."
        />
        </form>
    )
}

export default SearchForm
