import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import Eachcountry from '../Eachcountry/Eachcountry'
import Filter from '../Filter/Filter';
import Search from '../Search/Search';

function FetchData() {
  const [countries, setCountries] = useState([])
  const [region, setRegion] = useState('');

  const handleSelect = (event) => {
    setRegion(event.target.value);
  };
  useEffect(() => {
    Axios.get('https://restcountries.eu/rest/v2/all')
      .then(res => {
        setCountries(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  function handleSearch(searchresult){
    // var searchresult = new []();
    // console.log(searchresult)
    setCountries(searchresult)
  }
  return (

    <div>
      <div className="flex flex-col md:flex-row w-full justify-between">
        <Search country={countries} handleSearch={handleSearch}/>
        <Filter
          region={region}
          handleSelect={handleSelect}
        />
      </div>
      <div
        className="my-12 px-4 md:px-0 grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 container">
        {
          countries.map(country =>
            // console.log(country.name),
            <Eachcountry key={country.name} country={country} />)
        }
      </div>
    </div>
  )
}

export default FetchData
