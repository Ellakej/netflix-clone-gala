import React from 'react'
import "../styles/movie.css"
import Header from "../components/Header";
import Sinopsis from "../components/Sinopsis";

function movie() {
  return (
    <div id="root">
      <Header/>
      <Sinopsis/>
    </div>
  )
}

export default movie