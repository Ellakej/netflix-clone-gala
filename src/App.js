import { makeStyles } from "@material-ui/core";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Profile from "./Pages/Profile";
import Movie from "./Pages/Movie";
import Video from "./Pages/Video.js";
import Extra from "./Pages/Extra.js";

function App() {
  const user = "Ricardo";                    // Variable del usuario
  const classes = useStyles();          // Para usar estilos en los componentes
  return (
    <div className={classes.root}>
     <Router>
       {
         !user ? (<Login/>) : (         // Si no hay usuario entra a Login
            // Si existe usuario pasa a las rutas
           <Routes>
             <Route path='profile' element={<Profile/>} />
             <Route path="/" element={<Home/>} />
             <Route path="/movie" element={<Movie/>} />
             <Route path="/video" element={<Video/>} />
             <Route path="/extra" element={<Extra/>} />
           </Routes>
         )
       }
     </Router>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    backgroundColor: "#111"
  },
}));


export default App;
