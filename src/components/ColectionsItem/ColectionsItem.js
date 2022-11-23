import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import StarRating from '../StarRating/StarRating'
import './ColectionsItem.css'



function ColectionsItem({ id, image, category, title }) {
  const navigate = useNavigate()
  return (
    <div className='colectionItem' key={id}>
      <ul className='ul'>
        <li>
          <img src='https://www.logo.wine/a/logo/Facebook/Facebook-f_Logo-Blue-Logo.wine.svg' alt={''} />
        </li>
        <li>
          <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/768px-Instagram_logo_2016.svg.png' alt={''} />
        </li>
        <li>
          <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/2044px-WhatsApp.svg.png' alt={''} />
        </li>
      </ul>

      <img alt='' src={image} />
      <div className='con-text'>
        <h2>{title}</h2>
        <p>
          {category}
          <button onClick={() => navigate(`/colections/${id}`)}><NavLink to={`/colections/${id}`}> See More </NavLink></button>
        </p>
      </div>

    </div>
  )
}

export default ColectionsItem