import React, { useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectCategory } from '../../store/slice/category/categorySlice';
import { fetchColections } from '../../store/slice/colections/ColectionsAPI';
import { selectColections } from '../../store/slice/colections/ColectionsSlice'
import { selectsearchWord } from '../../store/slice/searchWord/searchWord';
import Category from '../Category/Category';
import ColectionsItem from '../ColectionsItem/ColectionsItem'
import "./Colections.css"




function Colections() {

  const colections = useSelector(selectColections);
  const dispatch = useDispatch()
  const categories = useSelector(selectCategory)
  const searchWord = useSelector(selectsearchWord)

  useEffect(() => {
    if (!colections.length) {
      dispatch(fetchColections())
    }
  }, [])

  const products = useMemo(() => {

    const haveCategory = categories.some(el => el.active);
    const initialProducts = colections.filter(product => product.title.toLowerCase().indexOf(searchWord.toLowerCase()) !== -1)

    if(haveCategory) {
      return initialProducts.filter(product => categories.find(category => category.title === product.category).active)
    }
    return initialProducts
  }, [colections, categories, searchWord])

  return (
    <>
      <div className='header'>
        <Category />
      </div>
      <div className='colection'>
        {
          products.length ? 
            products.map(colection => <ColectionsItem
              key={colection.id}
              {...colection}
              />) :
              <h1>Products <i style={{borderBottom: '1px solid black'}}>`{searchWord}`</i> not found</h1>
        }

      </div>
    </>

  )
}

export default Colections
