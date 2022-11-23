import axios from 'axios'
import React, { useEffect } from 'react'
import ReviewsItem from '../ReviewsItem/ReviewsItem'
import './Reviews.css'


function Reviews() {

  return (
    <>
      <h2 className='reviewsTitle'>Reviews</h2>
      <div className='review'>
       <ReviewsItem />
      </div>
    </>
  )
}

export default Reviews