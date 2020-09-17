import React from 'react'

function Filter({ region, handleSearch, handleSelect }) {
  return (
    <div className='filter-wrapper'>
      <select className='filter-select p-3 m-3 mx-auto' value={region} onChange={handleSelect}>
        <option selected hidden value=''>Search by Region</option>
        <option value='Europe'>Europe</option>
        <option value='Asia'>Asia</option>
        <option value='Africa'>Africa</option>
        <option value='Americas'>Americas</option>
        <option value='Oceania'>Oceania</option>
      </select>
    </div>
  )
}

export default Filter
