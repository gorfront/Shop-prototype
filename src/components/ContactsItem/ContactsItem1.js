import React from 'react'
import './ContactsItem1.css'

function ContactsItem1() {
  return (
    <ul className='contactItem'>
      
      <li> <span> Call: </span>  <a href="tel:+"> +37410101010 </a></li>
      <li> <span> Text: </span>  <a href="mailto:"> info@info.com </a></li>
      <li> <span> Addres: </span>  <a> Москва, ул. Конструкторская, 1 </a></li>
      <li> <span> Work Time: </span> <a> 09:00 - 18:00 </a> </li>
      <li><iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d5022948.291664613!2d37.007224889849155!3d52.068597838361065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1z0JzQvtGB0LrQstCwLCDRg9C7LiDQmtC-0L3RgdGC0YDRg9C60YLQvtGA0YHQutCw0Y8sIDE!5e0!3m2!1sru!2s!4v1666013859151!5m2!1sru!2s" ></iframe></li>
    </ul>
  )
}

export default ContactsItem1