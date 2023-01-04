import React from "react";
import { useRouter } from "next/router";

const Home = () => {
  const { push } = useRouter();
  const handleClick = () => {
    push("/weather");
  };
  return (
    <div>
      <h1>Welcome to weather app updated code from myFirtsBranch</h1>
      <p>Click below to get live weather update</p>
      <button onClick={handleClick}>Click</button>
    </div>
  );
};

export default Home;
