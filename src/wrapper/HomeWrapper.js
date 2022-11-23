import React from 'react'
import { Outlet } from 'react-router'
import NavBar from '../components/NavBar/NavBar'



function HomeWrapper() {
  return (
    <>
    <NavBar />
    <Outlet />
    </>
  )
}

export default HomeWrapper