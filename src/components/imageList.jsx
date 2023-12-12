import React from 'react'
import ImageItem from './imageItem'

function imageList({imgPlaceholder}) {
  return (
    <div className='img-up'>
{imgPlaceholder.map((image,index) =>{ 
    return <ImageItem key={index} images={image}/>
})} 
   </div>
  )
}

export default imageList
