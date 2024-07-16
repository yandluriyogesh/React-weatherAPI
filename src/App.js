import React, { useState } from 'react'
import Weather from './weather'
import './App.css'
import axios from 'axios'
const App = () => {
  const[weather,setweather]=useState()
  const [city,setCity]=useState('')
  const[error,setError] = useState(null)
  const apikey='d5ea5784119f527f9258faad5d37bf36';
  const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`;


  const submit=(e)=>{
    e.preventDefault()//
     axios.get(url)
    .then(response => {
      setweather(response.data);})

      
    .catch(error => {
        setError(error);
        setweather(null); });
    }
  return (
    <div className='bg'>
    <div className='card'>
      <h1 >WEATHER</h1>
      <form >
     
        <input type='text' id='city' onChange={(e)=>{setCity(e.target.value)}}  placeholder='Enter city name'/> 
        <button onClick={submit}>Get</button>
      
      <Weather weather={weather} error={error}/>
      </form>
      
     
    </div>
    </div>
  )
}

export default App
