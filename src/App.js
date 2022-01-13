import { useState, useEffect } from "react";
import Header from "./components/Header";
import WeatherInfo from "./components/WeatherInfo";

const API_KEY = process.env.REACT_APP_API_KEY;

function App() {
  const city = "Port Harcourt";
  const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;

  const [name, setName] = useState("");
  const [temp, setTemp] = useState("");
  const [desc, setDesc] = useState("");
  const [time, setTime] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_URL);
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
  }, [API_URL]);

  // Update time after every sec.. wow!
  setTimeout(() => {
    const time = new Date().toLocaleTimeString();
    setTime(time);
  }, 1000);

  return (
    <div className="App">
      <Header title="Kairos" />
      <WeatherInfo name={name} temp={temp} desc={desc} time={time} />
    </div>
  );
}

export default App;
