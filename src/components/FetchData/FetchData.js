import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import Eachcountry from '../Eachcountry/Eachcountry'

function FetchData() {
  const [countries, setCountries] = useState([])
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
    <div 
    className="my-12 px-4 md:px-0 grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 container">
      {
        countries.map(country =>
          <Eachcountry key={country.name} country={country} />)
      }
    </div>
  )
}

export default FetchData
