const WeatherInfo = ({ name, temp, desc }) => {
  return (
    <section className="weather-info">
      <h2>{name}</h2>
      <p>{temp}&#176;</p>
      <p>{desc}</p>
    </section>
  );
};

export default WeatherInfo;
