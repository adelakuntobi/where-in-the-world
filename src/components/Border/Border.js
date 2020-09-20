import Axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { useHistory } from 'react-router-dom'

function Border(props) {
  const { name } = props
  const [border, setBorder] = useState([])
  const history = useHistory();
  // var commaNumber = require('comma-number')
  const handleClick = (name) => {
    history.push(`/country/${name}`)
  }
  useEffect(() => {
    Axios.get(`https://restcountries.eu/rest/v2/alpha/${name}`)
      .then(res => {
        // console.log(res)
        setBorder(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [name])
  return (
    <div>
      <button 
      onClick={() =>handleClick(border.name)}
      className="border px-8 py-2 mr-3 my-2 font-bold">{border.name}</button>
    </div>
  )
}

export default Border
