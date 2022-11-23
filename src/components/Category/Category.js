import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import withShow from '../../hoc/withShow'
import fetchCategory from '../../store/slice/category/categoryAPI'
import { selectCategory } from '../../store/slice/category/categorySlice'
import { selectsearchWord, setSearchWord } from '../../store/slice/searchWord/searchWord'
import CategoryItem from '../CategoryItem/CategoryItem'
import './Category.css'



function Category() {

    const category = useSelector(selectCategory)
    const searchWord = useSelector(selectsearchWord)
    const dispatch = useDispatch();

    useEffect(() => {
        if (!category.length) {

            dispatch(fetchCategory())
        }
    }, [])

    return (
        <>

            <h2 className='colectionTitle'>Colections</h2>
            
            <ul className='categoryUl'>
                {
                    category.map(el => <CategoryItem
                        {...el}
                        key={el.id}
                    />)
                }
            </ul>
            <div className='box'>
                <input 
                        type={'text'}  
                        className='input' 
                        placeholder={"Search..."} 
                        value={searchWord}
                        onChange={(e) => dispatch(setSearchWord(e.target.value))}
                        />

                <button className='but'>
                    <img alt='' src={'https://svgsilh.com/svg/3331255.svg'} />
                </button>

            </div>
            <details className='categoryDetails' style={{display: '' ? 'block' : ''}}>
                <summary>Category</summary>
                {
                    category.map(el => <CategoryItem
                        {...el}
                        key={el.id}
                    />)
                }
            </details>

        </>
    )
}

export default Category