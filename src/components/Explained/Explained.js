import React from 'react'
import Border from '../Border/Border';

function Explained(props) {
  const { country } = props
  var commaNumber = require('comma-number')

  return (
    <div className="flex flex-col md:flex-row py-2 px-8 p md:p-8 h-full details">
      <img src={country.flag} alt="country flag" className="md:w-1/2 w-full pr-0" />
      <div className="w-full md:w-1/2 px-0 md:px-16">
        <div className="flex md:flex-row flex-col justify-between md:items-center">
          <div className="py-2">
            <h2 className="py-2 text-3xl leading-tight">{country.name}</h2>
            <p><b>Native Name:</b> {country.nativeName}</p>
            <p><b>Population:</b> {commaNumber(country.population)}</p>
            <p><b>Region:</b> {country.region}</p>
            <p><b>Sub Region:</b> {country.subregion}</p>
            <p><b>Capital:</b> {country.capital}</p>
          </div>
          <div className="py-2">
            <p><b>Top Level Domain:</b> {country.topLevelDomain[0]}</p>
            <p><b>Currencies:</b> {country.currencies[0].name}</p>
            <p><b>Languages:</b> {country.languages[0].name}</p>
          </div>
        </div>
        <p><b>Border Countries:</b></p>
        <div className="flex flex-row flex-wrap">
          {
            (country.borders).map(element =>
              <Border name={element} />)
            // <button className="border px-12 py-2 m-6">{element.name}</button>)
          }
        </div>
      </div>
    </div>
  )
}

export default Explained
