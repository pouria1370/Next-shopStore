import Footer from '@/organismes/footer/footer'
import Header from '@/organismes/header/header'
import React from 'react'

const MainLayout = ({children}) => {
  return (
    <>
    <Header/>
    {children}
    <Footer/>
    </>
  )
}

export default MainLayout