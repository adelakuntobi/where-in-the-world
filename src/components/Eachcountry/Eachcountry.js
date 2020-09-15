import React from 'react'
// import { UserContext } from '../Mainpage/Mainpage'

function Eachcountry(props) {
  const { country } = props
  var commaNumber = require('comma-number')
  return (

    <div className="box-shadow box bg-white cursor-pointer">

      <img src={country.flag} alt="country flag" className="object-cover w-full h-56 md:h-40" />
      <div className="px-4 pt-4 pb-8">
        <h2 className="py-2 leading-tight">{country.name}</h2>
        <p><b>Population:</b> {commaNumber(country.population)}</p>
        <p><b>Region:</b> {country.region}</p>
        <p><b>Capital:</b> {country.capital}</p>
      </div>
    </div>
  )
}

export default Eachcountry
