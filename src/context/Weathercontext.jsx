import React, { createContext, useEffect, useState } from "react";
import { createRef } from "react";

export const weathercontext = createContext();

const Weathercontext = ({ children }) => {
  const inputref = createRef();
  const [weather, setweather] = useState();
  const [temperature, settemperature] = useState();
  const [description, setdescription] = useState();
  const [name, setname] = useState("");

  const [input, setinput] = useState("");

  const getweatherdata = async () => {
    if (input === "") {
      alert("Please enter a city name");
      return;
    }
    const apires = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=3fc2ed80259799707da42df549c384c2`
    );
    const data = await apires.json();
    setweather(data.weather[0].main);
    settemperature(data.main.temp);
    setdescription(data.weather[0].description);
    setname(data.name);
    console.log(data);
    // const {main,weather}=data;
  };

  const onfocus = () => {
    inputref.current.focus();
  };
  useEffect(() => {
    onfocus();
  }, []);

  return (
    <weathercontext.Provider
      value={{
        input,
        setinput,
        getweatherdata,
        data,
        weather,
        temperature,
        description,
        name,
        inputref,
      }}
    >
      {children}
    </weathercontext.Provider>
  );
};

export default Weathercontext;
