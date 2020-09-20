import React from 'react'
// import { useState } from 'react';
import { useHistory } from 'react-router-dom'
// import { Link } from 'react-router-dom'
// import { UserContext } from '../Mainpage/Mainpage'

function Eachcountry(props) {
  const { country, search , filter } = props
  const history = useHistory();
  var commaNumber = require('comma-number')
  const handleClick = (name) => {
    history.push(`/country/${name}`)
  }

  if (search !== "" && country.name.toLocaleLowerCase().indexOf(search) === -1) {
    return null
  }

  if (filter !== "" && country.region.indexOf(filter) === -1) {
    return null
  }


  return (
    // <Link to="/country/" >
    <div className="box-shadow box bg-white cursor-pointer" onClick={() => handleClick(country.name)}>
      <img src={country.flag} alt="country flag" className="object-cover w-full h-56 md:h-40" />
      <div className="px-4 pt-4 pb-8">
        <h2 className="py-2 leading-tight">{country.name}</h2>
        <p><b>Population:</b> {commaNumber(country.population)}</p>
        <p><b>Region:</b> {country.region}</p>
        <p><b>Capital:</b> {country.capital}</p>
      </div>
    </div>
    // </Link>
  )
}

export default Eachcountry
