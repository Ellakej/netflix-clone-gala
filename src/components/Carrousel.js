import { IconButton, makeStyles, Typography } from '@material-ui/core';
import React from 'react'
import posterMini from "../images/rey_leon_poster_new.jpg"
import { useNavigate } from 'react-router-dom';


const Carrousel = () => {
    const classes = useStyles(); 
    const navigate = useNavigate();
  return (
    <div className={classes.root}>
        <Typography className={classes.Titulo} variant="h4" component="h1">
            Originales
        </Typography>
        <div className={classes.Posters}>
          <IconButton onClick={()=>navigate("/movie")}>
            <img className={classes.Poster} alt="Rey leon" key="22" src={posterMini}/>
          </IconButton>
        </div>

    </div>
  )
}

const useStyles = makeStyles((theme) => ({
    root: {
      color: "#fff",
      marginLeft: theme.spacing(4)
    },
    Titulo: {
      marginRight: theme.spacing(4)
    },
    Poster: {
      maxHeight: "12rem",
      objectFit: "contain",
      marginRight: theme.spacing(1),
      transition: "transform 450ms",
      "&:hover": {
        transform: "scale(1.1)",
      },
    },
    Posters: {
        marginTop: theme.spacing(4),
        display: "flex",
        overflowY: "hidden",
        overflowX: "scroll",
        "&::-webkit-scrollbar": {
            display: "none",
        },
    }
    }));

export default Carrousel