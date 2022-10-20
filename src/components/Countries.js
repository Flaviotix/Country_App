import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "./Card";

const Countries = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((res) => setData(res.data));
  }, []);

  return (
    <div className="countries">
      <ul>
        {data.map((country, index) => (
          <Card country={country} key={index} />
        ))}
      </ul>
    </div>
  );
};

export default Countries;
