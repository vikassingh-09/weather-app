import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
type EnterCity = {
  name: any;
};

const CardWrapper = styled.div`
  overflow: hidden;
  background: lightblue;
  padding: 0 0 32px;
  margin: 48px auto 0;
  width: 300px;
  height: 150px;
  font-family: Quicksand, arial, sans-serif;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
  border-radius: 10px;
`;

const CityDetails = (props: EnterCity) => {
  const router = useRouter();
  const [weatherData, setWeatherData] = useState<any>({});
  const [cityName, setCityName] = useState<string>(props.name);
  const[toggle,setToggle]=useState<boolean>(false)
  console.log(props);
  const API_KEY = "587c295acd2476481a8bd0c0fdd895bf";
  useEffect(() => {
    setCityName(props.name);
  }, [props.name]);

  const fetchData = async () => {
    const result = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}`
    );
    const data = await result.json();
    console.log("apidata", data);
    setWeatherData(data);
  };
  useEffect(() => {
    cityName && fetchData();
  }, [cityName]);

  return (
    <CardWrapper >
      <p>
        Temp at <strong>{props?.name}</strong>:{weatherData?.main?.temp} F
      </p>
      <p>Min-temp:{weatherData?.main?.temp_min} F</p>
      <p>Max-temp:{weatherData?.main?.temp_max} F</p>
      {weatherData?.weather?.map((ele: any) => {
        return <p key={ele.id}>Weather:{ele.main}</p>;
      })}
    </CardWrapper>
  );
};

export default CityDetails;
