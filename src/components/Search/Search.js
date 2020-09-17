import React, { useEffect, useState } from 'react'

function Search({country,handleSearch}) {
  // console.log(country)
  const [search, setSearch] = useState("")
  const [searchResults, setSearchResults] = useState([])
  const handleChange = e => {
    setSearch(e.target.value)
  }
  
  
  useEffect(() => {
    const results = country.filter(country =>
      (country.name).toLowerCase().includes(search)
      );
      setSearchResults(results);
      // console.log(results);
      console.log(searchResults)
      
      handleSearch(searchResults)
      
    },[search])
    return (
      <div>
      <input type="text"
        placeholder="Search"
        className="p-3 m-3 w-64 outline-none"
        value={search}
        onChange={handleChange}
      />
      {/* <ul>
        {searchResults.map(item => (
          <li>{item}</li>
        ))}
      </ul> */}
    </div>
  )
}

export default Search
