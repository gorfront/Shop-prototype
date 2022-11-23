import React from 'react'
import ContactsItem2 from '../ContactsItem/ContactsItem2'
import ContactsItem1 from '../ContactsItem/ContactsItem1'
import './Contacts.css'




function Contacts() {
  return (
    <>
      <h2 className='constactsTitle'>Contacts</h2>

      <div className='contact'>
      <ContactsItem1 />
      <ContactsItem2 />
    </div>
    </>
    
  )
}

export default Contacts