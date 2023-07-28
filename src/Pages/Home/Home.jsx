import React from 'react'
import { Information } from '../../Components/Information'
import { Cards } from '../../Components/Cards'
import { Toolbar } from '../../Components/Toolbar'
import { Navbar } from '../../Components/Navbar'

export const Home = () => {
  return (
    <>
    
    <Navbar/>
    <Information/>
      
      <div class="separator"></div>

    <Cards/>
      

    <Toolbar/>
    </>
  )
}
 