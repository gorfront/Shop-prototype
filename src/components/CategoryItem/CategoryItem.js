import React from 'react'
import { useDispatch } from 'react-redux'
import { setActiveCategory } from '../../store/slice/category/categorySlice'
import './CategoryItem.css'

function CategoryItem({title, active, id}) {

  const dispatch = useDispatch()
  
  return (
        <li 
            onClick={() => 
                      dispatch(setActiveCategory(id))} 
            className= {`categoryLi ${active ? 'activeC' : ''}`}
            >
            {title}
        </li>
  )
}

export default CategoryItem