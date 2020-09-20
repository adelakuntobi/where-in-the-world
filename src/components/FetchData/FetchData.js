import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import Eachcountry from '../Eachcountry/Eachcountry'

function FetchData() {
  const [countries, setCountries] = useState([])
  const [search, setSearch] = useState("")
  const [filter, setFilter] = useState("")

  useEffect(() => {
    Axios.get('https://restcountries.eu/rest/v2/all')
      .then(res => {
        setCountries(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  return (
    <div>
      <div className="flex flex-col pt-5 md:flex-row w-full justify-between px-4">
        <input
          placeholder="Search Country" onChange={(e) => {
            setSearch(e.target.value)
            setFilter("")
          }}
          aria-label="Search Country" className="p-3" />
        <select className="p-3" onChange={(e) => {
          setSearch("")
          setFilter(e.target.value)
        }}>
          <option selected hidden value="">Filter By Region</option>
          <option value="Asia">Asia</option>
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
      <div
        className="my-8 md:my-12 px-4 md:px-0 grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 container">
        {
          countries.map(country =>
            <Eachcountry key={country.name} country={country} search={search} filter={filter} />)
        }
      </div>
    </div>
  )
}

export default FetchData
