import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="flex flex-col md:flex-row h-auto md:h-100 m-6 md:m-12 p-4 md:p-6">
      
      {/* Left Section - Text */}
      <div className="w-full md:w-3/5 bg-white p-4 md:p-6">
        <div className="text-left">
          <h2 className="myheadingtext text-xl md:text-2xl font-bold">
            Hi, I am Naveen, <br />
            Fullstack Developer
          </h2>
        </div>

        <div className="text-justify mt-4">
          <p id="my-description">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
            Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
          </p>
        </div>

        <div className="flex justify-start mt-6">
          <button className="resumebutton bg-[#FF6464] text-white px-4 py-2 rounded-md">
            Download Resume
          </button>
        </div>
      </div>

      {/* Right Section - Profile Picture */}
      <div className="w-full md:w-2/5 bg-white p-4 md:p-6 flex justify-center items-center">
        <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-62 md:h-62 rounded-full bg-[url('/path-to-image.jpg')] bg-cover bg-center shadow-lg shadow-gray-500/50">
        </div>
      </div>
      
    </div>
  );
}

export default Home;
