import React, { ChangeEvent, useState } from "react";
import { useRouter } from "next/router";
import CityDetails from "../../component/cityDetails";

//https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

// class WeatherResult {
//   main = { temp: 0 };
//   temp = 0;
// }
const Home = () => {
  const API_KEY = "587c295acd2476481a8bd0c0fdd895bf";
  const { push } = useRouter();
  const [input, setInput] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
    console.log(input);
  };

  const handleClick = () => {
    push(`/weather/${input}`);
  };

  return (
    <div>
      <h1>Weather Forecast</h1>

      <input
        type="text"
        value={input}
        onChange={handleChange}
        placeholder="Enter City"
      />
      <button onClick={handleClick}>Search</button>
      <br />
    </div>
  );
};

export default Home;
