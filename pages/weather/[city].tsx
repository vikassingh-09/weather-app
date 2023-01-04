import React from "react";
import { useRouter } from "next/router";
import CityDetails from "../../component/cityDetails";

const City = () => {
  const router = useRouter();
  const { city } = router.query;
  console.log( 'city',city)
  return (
    <div>
      <CityDetails name={city} />
    </div>
  );
};

export default City;
