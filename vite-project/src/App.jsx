import { useState } from 'react'
import SearchBar from './searchBar';
import Weather from './Weather';
import axios from 'axios';
import './App.css'


function App() {

  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState("");
  const apiKey="6141dab13c7d37e8db2d28250893827c";

  const fetchWeather = async(cityName)=>{
    try{
      const response = await axios.get( `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`);
      setWeatherData(response.data);
     
    }
    catch(error){
      console.error("error fetching weather data",error);
      
    }
  };

  const handleSearch = () =>{
    if(city){
      fetchWeather(city);
    }
  };

  return (
   <div className='app'>
    <h1>Weather App</h1>
    <SearchBar setCity={setCity} city={city} handleSearch={handleSearch}/>
    {weatherData ? (
      <Weather data={weatherData}/>
    ) : (<p>Enter a city name to get the weather</p>)} 

   </div>
  );

}


export default App;
