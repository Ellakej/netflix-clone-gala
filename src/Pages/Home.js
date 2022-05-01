import { makeStyles } from '@material-ui/core';
import React from 'react'
import Header from '../components/Header';
import Banner from '../components/Banner';
import Carrousel from '../components/Carrousel';
import '../styles/responsive.css'

const Home = () => {
  return (
    <div id="root">
      <Header/>
      <div id="banner">
        <Banner/>
      </div>
      <div id="carrusel">
        <Carrousel/>
      </div>
      
    </div>
  )
}


export default Home