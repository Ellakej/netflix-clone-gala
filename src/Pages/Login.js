import { makeStyles } from '@material-ui/core';
import React from 'react'

const Login = () => {
    const classes = useStyles();          // Para usar estilos en los componentes
  return (
    <div>Login</div>
  )
}
// Objeto de estilos
const useStyles = makeStyles((theme) => ({
    root: {
      //backgroundColor: "#111",
      minHeight: "100vh",
    },
  }));

export default Login