import React from 'react'

function Cards({image,title,desc,tech}) {
  return (
    <div className='project-card'>
      <img src={image} alt="" />
      <div className="card-content">
      <h2>{title}</h2>
      <p><strong>Description: </strong>{desc}</p>
      <p><strong>Technologies used: </strong>{tech}</p>
      </div>
      
    </div>
  )
}

export default Cards
