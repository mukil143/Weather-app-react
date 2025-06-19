import React, { useContext, useState } from "react";
import { weathercontext } from "../context/Weathercontext";
import{HiSun,HiMoon}from 'react-icons/hi2'

const Home = () => {
  const {
    setinput,
    input,
    getweatherdata,
    weatherdata,
    weather,
    temperature,
    description,
    name,
    inputref,
  } = useContext(weathercontext);

  const [darkmode,setdarkmode]=useState(false);

  // const [weatherdata, setweatherdata] = useState();
  const onSubmit = () => {
    setinput("");
    getweatherdata();
  };



  
  
  return (
    <section style={{
    backgroundColor: darkmode ? "black" : "#38bdf8", // dark blue : sky blue
    color: darkmode ? "white" : "white"
  }}  className=" bg-sky-400 h-dvh text-white flex flex-col items-center transform transition-colors duration-300 ease-in-out">
        <span  onClick={()=>{setdarkmode(!darkmode)}} className="fixed right-5 top-5 text-3xl transform transition duration-300 hover:cursor-pointer  " >{darkmode?<span><HiSun/></span>:<HiMoon/>}</span>
      <div className="*:mt-4">
        <h1 className="text-4xl font-bold  md:text-5xl   ">Weather App🌥️</h1>
        <input
        ref={inputref}
          value={input}
          onChange={(e) => {
            setinput(e.target.value);
          }}
          type="text"
          placeholder="Enter City name"
          className="  bg-white/20 backdrop-blur-sm shadow-lg placeholder:text-white outline px-1 py-2 text-lg outline-none border-2 rounded-lg "
        />
        <br />
        <button style={{
    backgroundColor: darkmode ? "white" : "black", // dark blue : sky blue
    color: darkmode ? "black" : "white"
  }}
          className="bg-black p-2 rounded-lg hover:cursor-pointer transform hover:bg-white hover:text-black transition-all duration-300 ease-in-out text-white text-lg font-semibold shadow-lg"
          onClick={onSubmit}
        >
          <a href=""></a>Get Report
        </button>
        <div className="  border-2 rounded-lg p-5  shadow-lg  bg-white/20 backdrop-blur-sm *:mt-2 *:text-2xl">
          <h1 className="">📍 Location : {name} </h1>
          <h1 className="">🌥️ Weather : {weather} </h1>
          <h2>🌡️ Temperature : {temperature} </h2>
          <h2>📋 Description : {description} </h2>
        </div>
      </div>
    </section>
  );
};

export default Home;
