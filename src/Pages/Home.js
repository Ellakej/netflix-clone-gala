import { makeStyles } from '@material-ui/core';
import React from 'react'
import Header from '../components/Header';
import Banner from '../components/Banner';

const Home = () => {
    const classes = useStyles();          // Para usar estilos en los componentes
  return (
    <div>
      <Header/>
      <Banner/>
    </div>
    
  )
}

// Objeto de estilos
const useStyles = makeStyles((theme) => ({
    root: {
      //backgroundColor: "#111",
      minHeight: "100vh",
    },
  }));

export default Home