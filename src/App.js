import "./App.css";
import React from "react";
import PantallaCompleta from "./Componentes/PantallaCompleta";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const peliculas = [
    {
      id: 1,
      titulo: "Inception",
      imagen: "inception",
      genero: "Drama",
      anio: 2010,
    },
    {
      id: 2,
      titulo: "The Pursuit of Happyness",
      imagen: "thepursuitofhappyness",
      genero: "Drama",
      anio: 2006,
    },
    {
      id: 3,
      titulo: "The Wolf Of Wall Street",
      imagen: "thewolfofwallstreet",
      genero: "Black comedy",
      anio: 2013,
    },
    {
      id: 4,
      titulo: "Interstellar",
      imagen: "interstellar",
      genero: "science fiction",
      anio: 2014,
    },
    {
      id: 5,
      titulo: "GoodFellas",
      imagen: "goodfellas",
      genero: "Crime",
      anio: 1990,
    },
    {
      id: 6,
      titulo: "Inglourious Basterds",
      imagen: "bastardossingloria",
      genero: "Comedy",
      anio: 2009,
    },
  ];

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<PantallaCompleta peliculas={peliculas} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
