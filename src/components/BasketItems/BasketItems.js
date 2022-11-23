import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrementCount, deleteAll, deleteItem, incrementCount, selectUsers } from '../../store/slice/users/usersSlice'
import './BasketItems.css'



function BasketItems() {

  const { currentUser } = useSelector(selectUsers);
  const dispatch = useDispatch()


  return (
    <>
       

      {
        currentUser.cart?.map(item => (

          <div key={item.id} className='cardItem'>
         
            <div className='cardItem image'>
              <img alt='' src={item.image} />
            </div>

            <div className='about cardItem'>
              <h2>{item.title}</h2>
              <p>{item.description}</p>


              <div className='product-count-basket'>
                <h3>$ {item?.price * item?.count}</h3>
                <div>
                  <button onClick={() => dispatch(decrementCount(item))}>-</button>
                  <span>{item?.count}</span>
                  <button onClick={() => dispatch(incrementCount(item))}>+</button>

                </div>
              </div>

              <div className='cardItem buttons'>
                <button onClick={() => dispatch(deleteItem(item))}>Delete</button>
              </div>

            </div>


          </div>
        ))
      }


    </>
  )
}

export default BasketItems