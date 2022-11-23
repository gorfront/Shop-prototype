import React, { useEffect, useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router'
import { selectColections } from '../../store/slice/colections/ColectionsSlice'
import { fetchProduct } from '../../store/slice/currentProduct/currentProductAPI'
import { decCount, incCount, selectCurrentProduct } from '../../store/slice/currentProduct/currentProductSlice'
import { addToCard, selectUsers } from '../../store/slice/users/usersSlice'
import StarRating from '../StarRating/StarRating'
import './UniqItem.css'


function UniqItem() {

  const product = useSelector(selectCurrentProduct);
  const dispatch = useDispatch()
  const { id } = useParams()
  const { currentUser } = useSelector(selectUsers);
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(fetchProduct(id))
  }, [])


  return (
    <div className="wrapper">

      <div className="product-img">

        <img src={product?.image} alt='' />

      </div>


      <div className="product-text">

        <h1>{product?.title}</h1>

        <p>
          {product?.description}
        </p>

      </div>

      <div className='about-product-price'>

      <div className='stars'>
        <StarRating rating={product?.rating} />
      </div>

        <div className="product-price-btn">

          <p>
            $ <span>{product?.price * product?.count}</span>
          </p>


        </div>

        <div className='product-count'>
          <button onClick={() => dispatch(decCount())}>-</button>
          <span>{product?.count}</span>
          <button onClick={() => dispatch(incCount())}>+</button>
        </div>

        <button
          className='about-product-price-btn'
          type="button"
          onClick={() => {
            if (currentUser.id) {
              dispatch(addToCard(product))
              navigate('/basket')
            }
            else {
              navigate('/login')
            }
          }}
        >
          ADD BASKET
        </button>
      </div>


    </div>

  )

}

export default UniqItem