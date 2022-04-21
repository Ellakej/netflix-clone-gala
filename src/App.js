import { makeStyles } from "@material-ui/core";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Profile from "./Pages/Profile";

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
           </Routes>
         )
       }
     </Router>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    //backgroundColor: "#111",
    minHeight: "100vh",
  },
}));


export default App;
