import { Button, makeStyles, Typography } from '@material-ui/core';
import React from 'react'
import banner from '../images/banner_2.jpeg';

const Banner = () => {
    const classes = useStyles();          // Para usar estilos en los componentes
    const truncate = (string, n) => string?.length > n ? `${string.substr(0, n-1)}...` : string
  return (
    <div className={classes.root}>
      <div className={classes.content}>
        <Typography className={classes.Titulo} variant="h2" component="h1">
          El Rey León
        </Typography>
        <div className={classes.buttons}>
          <Button>Reproducir</Button>
          <Button>Mi lista </Button>
        </div>
        <Typography style={{wordWrap: "break-word"}} className={classes.description} variant="h6">
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
  Titulo: {
    marginBottom: "20px"
  },
  description: {
    marginTop: "20px"
  },
  buttons: {
    "& button":{
      cursor: "pointer",
      color: "#fff",
      fontWeight: 700,
      borderRadius: "5px",
      padding: theme.spacing(1, 4, 1, 4),
      marginRight: "1rem",
      backgroundColor: "rgba(51, 51, 51, 0.5)",
    },
    "& button:hover":{
      color: "#000",
      backgroundColor: "e6e6e6"
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
  }));

export default Banner