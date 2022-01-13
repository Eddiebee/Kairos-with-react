const WeatherInfo = ({ name, temp, desc, time }) => {
  return (
    <section className="weather-info">
      <p>{time}</p>
      <h2>{name}</h2>
      <p>{temp}</p>
      <p>{desc}</p>
    </section>
  );
};

export default WeatherInfo;
