import React from 'react'

function Weather({data}){
  if(!data){
    return null;
  }
  return (
    <div className='weather'>
        <h2>{data.name},{data.sys.country}</h2>
        <p>Temperature: {}0C</p>
        <p>Weather:{data.weather[0].description}</p>
        <p>humidity:{data.main.humidity}%</p>
        <p>Wind:{data.wind.speed}m/s</p> 
    </div>
  )
}

export default Weather;
