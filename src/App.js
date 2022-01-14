import { useState, useEffect } from "react";
import { useGeolocation } from "react-recipes";
import Header from "./components/Header";
import WeatherInfo from "./components/WeatherInfo";

const API_KEY = process.env.REACT_APP_API_KEY;

function App() {
  const [name, setName] = useState("");
  const [temp, setTemp] = useState("");
  const [desc, setDesc] = useState("");
  const [time, setTime] = useState("");

  // useGeolocation Hook
  const { latitude, longitude } = useGeolocation(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`
        );
        if (!response.ok) throw Error("Did not receive expected data.");
        const data = await response.json();
        const { name, main, weather } = data;
        setName(name);
        setTemp(`${main.temp}°`);
        setDesc(weather[0].description.toUpperCase());
      } catch (error) {
        alert(error.message);
        console.log(error.message);
      } finally {
        // ...
      }
    };

    fetchData();
  }, [latitude, longitude]);

  useEffect(() => {
    const timer = setTimeout(() => {
      const time = new Date().toLocaleTimeString();
      setTime(time);
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <div className="App">
      <Header title="Kairos" />
      <WeatherInfo name={name} temp={temp} desc={desc} time={time} />
      <code>
        latitude: {latitude} longitude: {longitude}
      </code>
    </div>
  );
}

export default App;
