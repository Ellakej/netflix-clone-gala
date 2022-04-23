import { Button, makeStyles } from '@material-ui/core';
import React from 'react'
import logo from "../images/netflix-logo.png";
import banner from "../images/heroBanner.jpeg";
import { NetflixButton } from '../styled/styledcomponents';

const Login = () => {
    const classes = useStyles();          // Para usar estilos en los componentes
  return (
    <div className={classes.root}>
      <img src={logo} className={classes.logo} alt="logo" />
      <NetflixButton className={classes.session}>Iniciar Sesion</NetflixButton >
    </div>
  )
}
// Objeto de estilos
const useStyles = makeStyles((theme) => ({
  logo: {
    position: "fixed",
    top: 0,
    left: 20,
    width: "150px",
    cursor: "pointer"
  },
    root: {
      position: "relative",
      height: "100vh",
      backgroundImage: `url(${banner})`,
      objectFit: "contain",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat"
    },
    session: {
      position: "fixed",
      zIndex: 15,
      right: 20,
      top: 20,
    }
  }));

export default Login