import { BsCircle } from "react-icons/bs";
import Aside from "./Aside";

const WeatherInfo = ({ name, temp, desc, time }) => {
  return (
    <section className="weather-info container">
      <p id="time">{time}</p>
      <h2 className="city">{name}</h2>
      <p className="fw-bold degree">{temp}</p>
      <p className="desc">{desc}</p>
      <aside>
        <span className="right-aside primary">
          <Aside icon={<BsCircle />} />
        </span>
        <span className="left-aside secondary">
          <Aside icon={<BsCircle />} />
        </span>
      </aside>
    </section>
  );
};

export default WeatherInfo;
