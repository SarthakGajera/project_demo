import React from "react";
import img4 from '../../assets/Home4.gif'
import img3 from '../../assets/Home3.gif'
import backgroundImage from '../../assets/bgHome1.jpg';

function Home() {
  return (
    
    <div className="flex flex-col items-center   px-4 bg-contain  bg-center bg-no-repeat bg-black"
    /*style={{backgroundImage:`url(${backgroundImage})`}}*/>
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide text-white  ">
        Welcome to
     
        <span className="bg-gradient-to-r from-orange-300 to-red-800 text-transparent bg-clip-text">
          {} EarthAlly
        </span>
      </h1>
      <p className="mt-10 text-lg text-center text-white max-w-4xl">
        Welcome to EarthAlly, your partner in promoting environmental
        sustainability. Our mission is to empower communities and individuals to
        take meaningful action for a greener planet. Through innovative
        solutions, resources, and a collaborative platform, EarthAlly connects
        you with the tools and knowledge needed to make a positive impact. Join
        us in creating a sustainable future where every action counts and every
        voice is heard. Together, let's be the change our world needs.
      </p>
      <div className="flex justify-center my-10">
        <a href="#"
        className="bg-gradient-to-r from-orange-300 to-red-800 py-3 px-4 mx-3 rounded-md">Start for free</a>
        <a href="#" className="py-3 px-4 mx-3 rounded-md border">Documentation</a>
      </div>
      <div className="flex mt-7 justify-center">
        
        <img src={img3} alt="" className="w-96 h-auto mx-10 border border-green-500"/>
        <img src={img4} alt="" className="w-96 h-auto border-green-500"/>
        
      </div>
    </div>
  );
}

export default Home;
