import { useState, useEffect } from "react";
import { useGeolocation } from "react-recipes";
import Header from "./Header";
import WeatherInfo from "./WeatherInfo";
// import WEATHER_API_KEY from "./api_key"; // for deployment build only

let WEATHER_API_KEY = ""; // for working on my machine

const API_KEY = WEATHER_API_KEY || process.env.REACT_APP_API_KEY;

function WeatherApp() {
  const [name, setName] = useState("");
  const [temp, setTemp] = useState("");
  const [desc, setDesc] = useState("");
  const [weatherIcon, setWeatherIcon] = useState("");

  const city = "Abuja";

  // useGeolocation Hook
  const { latitude, longitude } = useGeolocation({
    enableHighAccuracy: true,
    maximumAge: 15000,
    timeout: 12000,
  });

  useEffect(() => {
    const fetchData = async () => {
      const urlWithLatLon = `https://api.openweathermap.org/data/2.5/weather?lat=${
          latitude || 0
        }&lon=${longitude || 1}&units=metric&appid=${API_KEY}`,
        urlWithCity = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;
      try {
        const response = await fetch(city ? urlWithCity : urlWithLatLon);
        if (!response.ok) throw Error("Did not receive expected data.");
        const data = await response.json();
        const { name, main, weather } = data;
        console.log(data);
        setName(name);
        setTemp(`${main.temp}℃`);
        setDesc(weather[0].description.toUpperCase());
        setWeatherIcon(weather[0].icon);
      } catch (error) {
        alert(error.message);
      } finally {
        // ...
      }
    };

    fetchData();
  }, [latitude, longitude]);

  return (
    <div>
      <Header title="Kairos" />
      <WeatherInfo name={name} temp={temp} desc={desc} icon={weatherIcon} />
    </div>
  );
}

export default WeatherApp;
