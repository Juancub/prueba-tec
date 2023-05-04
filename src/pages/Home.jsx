import React from "react";
import placeholder from '../assets/placeholder.png';
import {useNavigate} from "react-router-dom"

const Home = () => {
    const navigate = useNavigate();

  return (
    <>
      <nav>
        <h1 className="text-2xl bg-gray-600 p-3 text-white pl-10">Popular Titles</h1>
      </nav>
      <section className="flex flex-row max-sm:flex max-sm:flex-col justify-center gap-3 m-20 max-sm:m-5 max-sm:mb-10">
        <div className=" text-black h-32 relative cursor-pointer self-center my-4" onClick={()=>navigate('/series')}>
          <img className="bg-gray-900" src={placeholder} alt="Popular Series" />
          <p className="absolute bottom-1/2 left-1/3 text-white text-3xl">SERIES</p>
          <p className="text-center">Popular Series</p>
        </div>
        <div className="text-black h-32 relative cursor-pointer self-center my-4" onClick={()=>navigate('/movies')}>
          <img className="bg-gray-900" src={placeholder} alt="Popular Movies" />
          <p className="absolute bottom-1/2 left-1/3 text-white text-3xl">MOVIES</p>
          <p className="text-center">Popular Movies</p>
        </div>
      </section>
    </>
  );
};

export default Home;
