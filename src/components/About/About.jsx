import React from "react";
import aboutImg from '../../assets/About_4.jpeg'


export default function About() {
  return (
    <div className="py-16 bg-customColor1">
      <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
          <div className="md:5/12 lg:w-5/12 ">
            <img
              src="https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="image"
            />
          </div>
          <div className="md:7/12 lg:w-6/12">
            <h2 className="text-2xl text-gray-900 font-bold md:text-4xl my-5">
              About EarthAlly
            </h2>
            <p className="mt-6 text-gray-600">
              EarthAlly is committed to fostering a sustainable future by
              providing communities and individuals with the tools, resources,
              and knowledge needed to take meaningful action. We believe in the
              power of collective efforts to drive environmental change, and we
              aim to be the platform that brings people together to make a
              lasting impact on our planet. Join us on our journey towards a
              greener tomorrow.
            </p>
            <p className="mt-4 text-gray-600">
              Our vision is to create a world where everyone has the opportunity
              to contribute to environmental sustainability. Through open data,
              innovative solutions, and a collaborative approach, we empower
              people to make informed decisions and take action in their daily
              lives. At EarthAlly, we’re not just building a platform; we’re
              building a movement.
            </p>

            <h3 className="text-xl text-gray-900 font-bold md:text-xl my-5 text-center" >"Empowering Change, One Sustainable Step at a Time."</h3>
            
          </div>
         
        </div>
      </div>
    </div>
  );
}
