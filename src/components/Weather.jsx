import React from 'react'
import { useState } from 'react'
import './Weather.css'

const api = {
    key:'01944b3a779fc8f3dd50cb49598b2b0b',
    base:'https://api.openweathermap.org/data/2.5/',
  }

function Weather() {
    const [search, setSearch] = useState('')
    const [weather,setWeather] = useState({})
    
    const Searched = () => {
      fetch(`${api.base}weather?q=${search}&units=metric&appid=${api.key}`)
      .then((res) => res.json())
      .then((result) => { setWeather(result) } )
    }
    const press = (e) => {
      if ( e.key === 'Enter'){
        Searched()
      }
    }
  return (
        <div className='App-div'>
          <h1>Wheater App</h1>
          <div className='top'>
          <input className='inputW' type="text" onChange={(e) => setSearch(e.target.value)} onKeyDown={press}/>
          <button className='buttonW' onClick={Searched} >Search</button>
          </div>
          {typeof weather.main !== 'undefined' ? (

            <div className='lesP'> 
              <p>{weather.name}</p>
              <p>{weather.main.temp}°C</p>
              <p>{weather.weather[0].main}</p>
              <p>( {weather.weather[0].description} )</p>
            </div>

          ):(
          ""
          )}
        </div>
  )
}

export default Weather