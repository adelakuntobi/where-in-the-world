import Axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import Explained from '../Explained/Explained';

function Details(props) {
  const [country, setCountry] = useState([])
  const history = useHistory();
  const { name } = useParams();
  useEffect(() => {
    Axios.get(`https://restcountries.eu/rest/v2/name/${name}`)
      .then(res => {
        setCountry(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [name])

  const goback = () => {
    history.goBack();
  }
  return (
    <div>
      <button 
      onClick={goback} 
      className="border backBtn px-12 py-2 m-6 font-bold">
        Back</button>
      {
        country.map(country =>
          <Explained country={country} />)
        }
    </div>
  )
      }
  export default Details

