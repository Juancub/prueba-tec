import React from 'react'
import data from "../data/sample.json"
import Card from '../components/Card'

const Series = () => {

  let filterSeries = data.entries.filter((dato) => {
    return dato.releaseYear>=2010 && dato.programType === "series";
  })

  filterSeries.sort((a, b) => {
    return a.title.localeCompare(b.title);
  })

  const first20 = filterSeries.slice(0, 20);

  return (
    <>
      <nav>
        {console.log(first20)}
        <h1 className="text-2xl bg-gray-600 p-3 text-white pl-10">Popular Series</h1>
      </nav>
      <div className='m-10 grid grid-cols-4 gap-4 justify-items-center max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1'>
        {first20.map((serie, i) => (
          <Card 
            key={i} title={serie.title} 
            description={serie.description} 
            releaseYear={serie.releaseYear} 
            img={serie.images['Poster Art'].url}/>
      ))}
      </div>
      
    </>
  )
}

export default Series