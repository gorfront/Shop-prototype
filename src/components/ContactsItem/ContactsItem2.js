import React from 'react'
import { useSelector } from 'react-redux'
import { selectUsers } from '../../store/slice/users/usersSlice'
import './ContactsItem2.css'

function ContactsItem2() {

  const {currentUser} = useSelector(selectUsers)

  return (
    <div className='contactForm'>
        <h2></h2>
        <input 
              type={'text'} 
              value={currentUser.id && currentUser.username} 
              placeholder={'Name...'} 
              onChange={(e) => e.target.value}
              />
        <input 
              type={'email'}
              value={currentUser.id && currentUser.email} 
              placeholder={'E-Mail...'} 
              onChange={(e) => e.target.value}
              />
        <textarea placeholder='Message...'></textarea>
        <button> Send </button>
    </div>
  )
}

export default ContactsItem2