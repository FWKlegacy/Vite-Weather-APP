import { useState } from 'react'
import SearchBar from './searchBar';
import Weather from './Weather';
import axios from 'axios';
import './App.css'


function App() {

  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState("");
  const[error, setError]=useState("");
  const apiKey = process.env.REACT_APP_WEATHER_API_KEY;


  const fetchWeather = async(cityName)=>{
    try{
      const response = await axios.get( `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`);
      
      if(response.status===200){
        setWeatherData(response.data);
      }
      else{
        setError("weather data could not be recieved");
      }
    }
    catch(error){
      console.error("error fetching weather data",error);
      setError('Failed to fetch weather data. Please try again later.');
      
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
    {error && <p className="error">{error}</p>}
    {weatherData ? (
      <Weather data={weatherData}/>
    ) : ( !error && <p>Enter a city name to get the weather</p>)} 

   </div>
  );

}


export default App;
