import { Icon, IconButton, makeStyles, Typography } from '@material-ui/core';
import React from 'react'
import logo from '../images/logo_rey_leon_blanco.png'
import banner from '../images/banner_previo.png';
import poster from '../images/rey_leon_poster_new.jpg';
import "../styles/responsive.css";
import { useNavigate } from 'react-router-dom';


const Sinopsis = () => {
    const classes = useStyles();
    const truncate = (string, n) => string?.length > n ? `${string.substr(0, n-1)}...` : string
    const navigate = useNavigate();
  return (
    <div>
        <div className={classes.root}>
                <div className={classes.background}>
                    <div align="CENTER">
                        <img id="background" src={banner} alt="Background"/>
                    </div>
                </div>
                <div className={classes.container}>
                  
                    <div align="CENTER" >
                        <img src={banner} alt="Poster" id="imagen_mobile" className={classes.poster}/>
                    </div>

                    <div id="titulo">
                      <h1>El Rey León: La Gala</h1>
                    </div>

                    <div id="barra_info">
                        <h6 id="coincidencia" class="barra_obj">100% de coincidencia</h6>
                        <h6 class="barra_obj">2022</h6>
                        <h6 class="barra_obj">Capítulos: 2</h6>
                        <h6 class="barra_obj">1 Temporada</h6>
                    </div>
                    <Typography style={{wordWrap: "break-word"}} id="description" >
                    {
                        truncate("¡Vive desde la comodidad de tu casa la presentación de el Rey León de baby ballet 2022!", 100)
                    }
                    </Typography>
                    <br></br>
                    <Typography style={{wordWrap: "break-word"}} id="description">
                      Cast: Alumn@s de Baby Ballet Tepeyac <br></br>
                      Creator: Baby Ballet Tepeyac
                    </Typography>
                    <br></br>
                    <br></br>
                    <hr width="100%" color="black"></hr>
                    <hr width="50%" color="red"></hr>

                    <br></br>

                    <div id="barra_caps" >
                      <h5>Episodios</h5>
                      <h5>Trailers</h5>
                    </div>

                    <div id="caps_mobile">
                      <div id="barra_episodios">
                        <div class="episodio">
                          <div class="pre_miniatura">
                            <IconButton onClick={()=>navigate("/video")}>
                              <img src={poster} alt="Miniatura" class="miniatura"/>
                            </IconButton>
                          </div>
                          <div class="text_episodio">
                            <h5>1. Gala</h5>
                          </div>
                        </div>
                        <div class="episodio">
                          <div class="pre_miniatura">
                            <IconButton onClick={()=>navigate("/extra")}>
                              <img src={poster} alt="Miniatura" class="miniatura"/>
                            </IconButton>
                          </div>
                          <div class="text_episodio">
                            <h5>2. Material Extra</h5>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div id="caps_desktop">
                      <div id="barra_episodios">
                        <div class="episodio">
                          <div class="pre_miniatura">
                            <IconButton onClick={()=>navigate("/video")}>
                              <img src={poster} alt="Miniatura" class="miniatura"/>
                            </IconButton>
                          </div>
                          <div class="text_episodio">
                            <h5>1. Gala</h5>
                          </div>
                        </div>
                        <div class="episodio">
                          <div class="pre_miniatura">
                            <IconButton onClick={()=>navigate("/extra")}>
                              <img src={poster} alt="Miniatura" class="miniatura"/>
                            </IconButton>
                          </div>
                          <div class="text_episodio">
                            <h5>2. Material Extra</h5>
                          </div>
                        </div>
                      </div>
                    </div>

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