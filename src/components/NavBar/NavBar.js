import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import withShow from '../../hoc/withShow'
import { logOutUser, selectUsers } from '../../store/slice/users/usersSlice'
import './NavBar.css'


function Navbar({ handlerShow, show }) {

    const { currentUser } = useSelector(selectUsers)
    const dispatch = useDispatch()

    return (

        <nav className='navbar'>
            <NavLink to='/' className='logo'>
                <img alt='Logo' src={'https://seeklogo.com/images/G/girls-and-clothing-fashion-shop-logo-4CEBE10B9E-seeklogo.com.png'} />
            </NavLink>
            <input type={'checkbox'} id={'toggle'} />

            <label htmlFor='toggle'>
                <button
                    className='hamburger'
                    onClick={handlerShow}
                >
                    <span className='line'></span>
                    <span className='line'></span>
                    <span className='line'></span>
                </button>
            </label >

            <div className='menu'
                style={{ maxHeight: show ? '300px' : '0px' }}
            >
                <ul className='list'>
                    <li>
                        <NavLink to='/' end>HOME</NavLink>
                    </li>

                    <li>
                        <NavLink to='/colections'>COLECTIONS</NavLink>
                    </li>

                    <li>
                        <NavLink to='/reviews'>REVIEWS</NavLink>
                    </li>

                    <li>
                        <NavLink to='/contacts'>CONTACTS</NavLink>
                    </li>
                    <li>
                        {
                            currentUser.id ?
                                <NavLink onClick={() => dispatch(logOutUser())} to='/'>LOG OUT</NavLink>
                                :
                                <NavLink to='/login'>LOG IN</NavLink>
                        }
                    </li>
                    <li
                        style={{ display: currentUser.id ? 'block' : 'none' }}
                    >
                        <img
                            className='userIcon'
                            alt=''
                            src='https://freesvg.org/img/abstract-user-flat-1.png'

                        />

                        <p className='userName'>
                            {currentUser.id && currentUser.username}
                        </p>

                    </li>

                    <li
                        style={{ display: currentUser.id ? 'inline-block' : 'none' }}
                    >
                        <NavLink

                            to='/basket'>
                            <img
                                alt=''
                                src='https://i.pinimg.com/originals/32/ec/41/32ec417cc69bb561715e28850d947225.png'
                                style={{ width: '40px', height: '40px' }}
                            />
                        </NavLink>
                    </li>
                </ul>

            </div>
        </nav >

    )
}

export default withShow(Navbar)