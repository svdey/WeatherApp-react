import React ,{useState,useEffect} from 'react'

const Weathercard = ({
 temp,humidity,pressure,weathermood,name,speed,country,sunset,
}) => {
 const [mood,setMood] = useState('');

useEffect(() => {
 if (weathermood) {
  switch (weathermood) {
   case "Clouds":
    setMood("wi-day-cloudy");
    break;
   case "Haze":
     setMood("wi-fog");
     break;
   case "Clear":
    setMood("wi-day-sunny");
    break;
   case "Mise":
     setMood("wi-dust");
     break;
   case "Rain":
      setMood("wi-day-rain");
      break;
      case "Snow":
       setMood("wi-day-snow-wind");
       break;
   default:setMood("wi-day-sunny");
    break;
  }
 }
}, [weathermood]);
let date = new Date(sunset * 1000);
let time = `${date.getHours()}:${date.getMinutes()}`;
  return (
    <>
     <article className="widget">
     <div className="weatherIcon">
      <i className={`wi ${mood}`}></i>
     </div>
     <div className="weatherInfo">
      <div className="temperature">
       <span>{temp}&deg;</span>
      </div>
      <div className="description">
       <div className="weatherCondition">{weathermood}</div>
       <div className="place">{name}, {country}</div>
      </div>
     </div>
     <div className="date">{new Date().toLocaleString()}</div>

     {/* all details */}
     <div className="extra-temp">
      <div className="temp-info-minmax">
       <div className="two-sided-section">
        <p>
         <i className={"wi wi-sunset"}></i>
        </p>
        <p className="extra-info-leftside">
         {time} <br/>
         Sunset
        </p>
       </div>
       <div className="two-sided-section">
        <p>
         <i className={"wi wi-humidity"}></i>
        </p>
        <p className="extra-info-leftside">
         {humidity} <br/>
         Humidity
        </p>
       </div>
      </div>
      <div className="weather-extra-info">
      <div className="two-sided-section">
        <p>
         <i className={"wi wi-rain"}></i>
        </p>
        <p className="extra-info-leftside">
         {pressure} <br/>
         Pressure
        </p>
       </div>
       <div className="two-sided-section">
        <p>
         <i className={"wi wi-strong-wind"}></i>
        </p>
        <p className="extra-info-leftside">
         {speed}<br/>
         Speed
        </p>
       </div>
      </div>
     </div>
    </article>
    </>
  )
}

export default Weathercard;