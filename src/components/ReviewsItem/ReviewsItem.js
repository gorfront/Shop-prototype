import React, { useState } from 'react'
import image from '../../image'
import './ReviewsItem.css'

function ReviewsItem() {

  return (
    <>
      {
        image.map(el =>
          <div className='reviewItem'>
            <img alt='' src={el} />
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
            <h3>Last First</h3>
          </div>
        )
      }

    </>
  )
}

export default ReviewsItem