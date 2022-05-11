import { makeStyles, Typography } from '@material-ui/core';
import React from 'react'
import logo from '../images/logo_rey_leon_blanco.png'
import banner from '../images/banner_previo.png';
import poster from '../images/poster_RL.png';
import "../styles/responsive.css";


const Sinopsis = () => {
    const classes = useStyles();
    const truncate = (string, n) => string?.length > n ? `${string.substr(0, n-1)}...` : string

  return (
    <div>
        <div className={classes.root}>
                <div className={classes.background}>
                    <div align="CENTER">
                        <img id="background" src={banner} alt="Background"/>
                    </div>
                </div>
                <div className={classes.container}>
                  
                    <div align="CENTER" id="imagen_mobile">
                        <img src={banner} alt="Poster" className={classes.poster}/>
                    </div>

                    <div id="barra_info">
                        <h4 id="coincidencia" class="barra_obj">100% de coincidencia</h4>
                        <h4 class="barra_obj">2022</h4>
                        <h4 class="barra_obj">Capítulos: 2</h4>
                        <h4 class="barra_obj">1 Temporada</h4>
                    </div>
                    <Typography style={{wordWrap: "break-word"}} id="description" variant="h6">
                    {
                        truncate("¡Vive desde la comodidad de tu casa la presentación de el Rey León de baby ballet 2022!", 100)
                    }
                    </Typography>
                    <br></br>
                    <br></br>
                    <hr width="100%" color="black"></hr>

                </div>
        </div>
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
    container: {
        padding: "15px",
    },
      background: {
        objectFit: "contain",
        backgroundSize: "cover",
        backgroundPosition: "center",
      },
      poster: {
        maxHeight: "12rem",
        objectFit: "contain",
        marginRight: theme.spacing(1),
        transition: "transform 450ms",
        "&:hover": {
            transform: "scale(1.1)",
        },
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
        marginRight: theme.spacing(90)
      },
      /*
    root: {
        backgroundImage: `url(${banner})`,
        position: "relative",
        height: "440px",
        objectFit: "contain",
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "#fff"
    },
    */
    fadeBottom: {
        position: "absolute",
        top: "50vh",
        bottom: 160,
        left: 0,
        right: 0,
        zIndex: 0,
        backgroundImage: "linear-gradient(180deg, transparent, rgba(37, 37, 37, 0.67), #111)",
      },
  }));
export default Sinopsis