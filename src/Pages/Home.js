import { makeStyles } from '@material-ui/core';
import React from 'react'

const Home = () => {
    const classes = useStyles();          // Para usar estilos en los componentes
  return (
    <div>Home</div>
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