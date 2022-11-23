import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import { deleteAll, selectUsers } from '../../store/slice/users/usersSlice'
import BasketItems from '../BasketItems/BasketItems'
import './Basket.css'



function Basket() {
  const dispatch = useDispatch()
  const { currentUser } = useSelector(selectUsers)
  const navigate = useNavigate()

  useEffect(() => {
    if (!currentUser.id) {
      navigate('/')
    }
  }, [])
  


  return (
    <>
      <div className='all'>
        <h2>
          $ {
              currentUser.cart?.length > 1 ?
              currentUser.cart?.reduce((x, y) =>{return x + (y.price * y.count)}, 0)
                :
              currentUser.cart?.reduce((x, y) => (y.price * y.count), 0)
            }
        </h2>
        <button onClick={() => dispatch(deleteAll())}>Delete All</button>
      </div>
      <div className='card'>
        <BasketItems />
      </div>

    </>
  )
}

export default Basket