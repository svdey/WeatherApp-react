import React, {useState, useEffect} from 'react'
import "./style.css"
import Weathercard from "./weathercard";
const Temp =  () => {
 const [searchValue,setSearchValue] = useState("asansol");
 const [myTempInfo,setMyTempInfo] = useState({});
 const getWeatherInfo = async () => {
  try {
   let url = `http://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=82fde363dd30e86cd02b72366d9e4688`;
   let res = await fetch(url);
   let data = await res.json();
   const {temp, humidity, pressure} = data.main;
   const {main : weathermood} = data.weather[0];
   const {name} = data;
   const {speed} = data.wind;
   const {country, sunset} =data.sys;
   const myWeatherInfo = {
     temp,humidity,pressure,weathermood,name,speed,country,sunset,
   };
   setMyTempInfo(myWeatherInfo);
  } catch (error) {
   console.log(error);
  }
 }
 useEffect(() => {
  getWeatherInfo();
 },[]);
 return(
  <>
    <div className="wrap">
     <div className="search">
      <input type="search"
       placeholder="Search..." 
       autoFocus id='search' 
       className="searchTemp" 
       value={searchValue} 
       onChange={(e) => setSearchValue(e.target.value)}/>
      <button type="button" className="searchButton" onClick={getWeatherInfo}>Search</button>
     </div>
    </div>
    {/* card Start */}
    <Weathercard {...myTempInfo}/>
  </>
 );
}

export default Temp;