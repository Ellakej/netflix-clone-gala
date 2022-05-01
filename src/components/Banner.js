import { Button, makeStyles, Typography } from '@material-ui/core';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import banner from '../images/banner_negro.png';
import logo from '../images/logo_rey_leon_blanco.png';
import '../styles/responsive.css';

const Banner = () => {
    const classes = useStyles();          // Para usar estilos en los componentes
    const navigate = useNavigate();
    const truncate = (string, n) => string?.length > n ? `${string.substr(0, n-1)}...` : string
  return (
    <div className={classes.root}>
      <div className={classes.content}>
        <img src={logo} alt="Logo" className={classes.Logo}/>
        <div className={classes.buttons}>
          <Button onClick={()=>navigate("/movie")}>Reproducir</Button>
        </div>
        <Typography style={{wordWrap: "break-word"}} className={classes.description} variant="h6" id="description">
          {
            truncate("¡Vive desde la comodidad de tu casa la presentación de el Rey León de baby ballet 2022!", 100)
          }
        </Typography>
        <div className={classes.fadeBottom}/>
        
      </div> 
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
  content: {
    padding: "50px"
  },
  Logo:{
    width: "300px",
    cursos: "pointer",
    marginBottom: theme.spacing(4)
  },
  Titulo: {
    marginBottom: "20px"
  },
  description: {
    marginTop: "20px",
    //marginRight: theme.spacing(90)
  },
  buttons: {
    "& button":{
      cursor: "pointer",
      color: "#fff",
      fontWeight: 700,
      borderRadius: "5px",
      padding: theme.spacing(1, 4, 1, 4),
      marginRight: "1rem",
      backgroundColor: "red",
    },
    "& button:hover":{
      color: "#000",
      backgroundColor: "#cb3234"
    }
  },
    root: {
      backgroundImage: `url(${banner})`,
      position: "relative",
      height: "440px",
      objectFit: "contain",
      backgroundSize: "cover",
      backgroundPosition: "center",
      color: "#fff"
    },
    fadeBottom: {
      position: "absolute",
      top: "30vh",
      bottom: 0,
      left: 0,
      right: 0,
      zIndex: 99,
      backgroundImage: "linear-gradient(180deg, transparent, rgba(37, 37, 37, 0.67), #111)",
    },
    fadeLeft: {
      position: "absolute",
      top: 0,
      bottom: 0,
      left: 0,
      right: "30vh",
      zIndex: 99,
      backgroundImage: "linear-gradient(-90deg, transparent, rgba(37, 37, 37, 0.67), #111)",
    }
  }));

export default Banner