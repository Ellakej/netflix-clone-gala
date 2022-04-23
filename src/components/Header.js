import { AppBar, Avatar, IconButton, makeStyles, Toolbar } from '@material-ui/core';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Logo from "../images/netflix-logo.png";
import avatar from "../images/avatar.jpeg";

const Header = () => {
    const classes = useStyles();          // Para usar estilos en los componentes
    const[show, setShow] = useState(false);
    const navigate = useNavigate();

    const hideHeader = () => {
      if(window.scrollY > 100){
        setShow(true)
      } else {
        setShow(false)
      }
    }

    useEffect( () => {
      window.addEventListener("scroll", hideHeader)
      // Limpieza del eventListener
      return()=>window.removeEventListener("scroll", hideHeader)
    }, [] )


  return (
    <AppBar position="sticky" elevation={0} className={`${classes.root } ${show && classes.Transparent}`}>
      
      <Toolbar className={classes.Toolbar}>
        <IconButton onClick={()=>navigate("/")}>
          <img src={Logo} alt="Logo" className={classes.Logo}></img>
        </IconButton>
        <Avatar variant="square" style={{cursor: "pointer"}} onClick={()=>navigate("profile")} src={avatar} />
      </Toolbar>
    </AppBar>
  )
}
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#111",
    top: 0,
    left: 0,
    right: 0
  },
  Toolbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },
  Transparent: {
    backgroundColor: "transparent"
  },
    Logo:{
      width: "100px",
      cursos: "pointer"
    }
  }));

export default Header