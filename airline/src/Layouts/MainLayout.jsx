
import React from 'react'
import {Outlet} from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import BackToTopButton from '../components/BackToTopButton'
const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
      <BackToTopButton />

    </>
  )
}

export default MainLayout
