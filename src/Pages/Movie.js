import React from 'react'
import "../styles/movie.css"
import Header from "../components/Header";
import Sinopsis from "../components/Sinopsis";
import "../styles/responsive.css";


function movie() {
  return (
    <div id="root">
      <div id="barra_header">
        <Header/>
      </div>
      <Sinopsis/>
    </div>
  )
}

export default movie