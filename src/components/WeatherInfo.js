import { BsCircle } from "react-icons/bs";
import Aside from "./Aside";
import Timer from "./Timer";

const WeatherInfo = ({ name, temp, desc, time, icon }) => {
  return (
    <section className="weather-info container wrapper">
      <div>
        <Timer />
        <h2 className="city">{name}</h2>
        <p className="fw-bold degree">{temp}</p>
        <p className="desc">{desc}</p>
      </div>
      <aside>
        <span className="right-aside primary">
          <Aside icon={<BsCircle />} />
        </span>
        <span className="left-aside secondary">
          <Aside icon={<BsCircle />} />
        </span>
        <span className="icon-cnt">
          <Aside
            icon={
              <i className={"heartbeat owi owi-7x owi-" + icon} id="icon"></i>
            }
          />
        </span>
      </aside>
    </section>
  );
};

export default WeatherInfo;
