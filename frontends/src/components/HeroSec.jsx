import React from "react";
import bugsImg from '../../src/assets/bugs1.jpg'; 
import { Link } from "react-router-dom";

const HeroSec = () => {
  return (
    <div
      className="relative bg-gradient-to-r from-indigo-900 to-purple-900 h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${bugsImg})` }}
    >
     
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

     
      <div className="relative z-10 max-w-screen-xl mx-auto text-center px-6 sm:px-8">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
          Welcome to
          <span className="text-indigo-400 block"> Bugs Tracking System </span>
        </h1>

        <p className="mt-6 text-lg sm:text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto">
          Empower your development workflow with our advanced Bug Tracking System.
          Experience seamless issue management, enhanced team collaboration, and
          efficient project delivery — all in one powerful platform.
        </p>

        <div className="mt-12 flex flex-wrap justify-center gap-6">
          <button className="px-8 py-4 font-medium text-base tracking-wide rounded-full text-slate-900 bg-white hover:bg-indigo-100 transition">
            Get Started
          </button>
          <button className="px-8 py-4 font-medium text-base tracking-wide rounded-full text-white bg-indigo-500 hover:bg-indigo-400 transition">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSec;
