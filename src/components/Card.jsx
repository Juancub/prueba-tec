import React from 'react'
import Swal from 'sweetalert2';

const Card = ({title, img, description, releaseYear}) => {

  const handleClick = () => {

    Swal.fire({
      title: `${title} 
      ${releaseYear}`,
      text: description,
      imageUrl: img,
      imageWidth: 300,
      imageHeight: 400,
      imageAlt: title,
    })
  }

  return (

    <div className='w-4/5 text-center hover:scale-95 transition delay-100 cursor-pointer' onClick={handleClick}>
        <img src={img} alt=''/>
        <p>{title}</p>
    </div>
  )
}

export default Card