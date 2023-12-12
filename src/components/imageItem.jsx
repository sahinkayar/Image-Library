import React from 'react'

function imageItem({images}) {
    console.log(images);
  return (
    <div className='img-container'>
      <img className='img-item' src={images.urls.small} alt="resim"/>
    </div>
  )
}

export default imageItem
