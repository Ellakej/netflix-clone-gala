import { makeStyles, Typography } from '@material-ui/core';
import React from 'react'

function Carrousel() {
    const classes = useStyles();  
  return (
    <div className={classes.root}>
        <Typography variant="h3" component="h1">
            Originales
        </Typography>


    </div>
  )
}

const useStyles = makeStyles((theme) => ({
    root: {
      color: "#fff",
      marginLeft: theme.spacing(4)
      
    },
    Posters: {
        display: "flex",
        overflowY: "hidden",
        overflowX: "scroll",
        "&::-webkit-scrollbar": {
            display: "none",
        },
    }
    }));

export default Carrousel