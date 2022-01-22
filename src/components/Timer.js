import { useState, useEffect } from "react";

const Timer = () => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      const time = new Date().toLocaleTimeString();
      setTime(time);
    }, 1000);

    return () => clearTimeout(timer);
  });

  return <p id="time">{time}</p>;
};

export default Timer;
