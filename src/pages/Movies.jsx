import React from 'react'
import data from "../data/sample.json"
import Card from '../components/Card'

const Movies = () => {

  let filterMovies = data.entries.filter((dato) => {
    return dato.releaseYear>=2010 && dato.programType === "movie";
  })

  filterMovies.sort((a, b) => {
    return a.title.localeCompare(b.title);
  })

  const first20 = filterMovies.slice(0, 20);

  return (
    <>
      <nav>
        {console.log(first20)}
        <h1 className="text-2xl bg-gray-600 p-3 text-white pl-10">Popular Movies</h1>
      </nav>
      <div className='m-10 grid grid-cols-4 gap-4 justify-items-center max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1'>
        {first20.map((movie, i) => (
          <Card 
            key={i}
            title={movie.title}
            description={movie.description} 
            releaseYear={movie.releaseYear} 
            img={movie.images['Poster Art'].url}/>
        ))}
      </div>
      
    </>
  )
}

export default Movies