import React, { useState } from "react";
import CartaPelicula from "./CartaPelicula";
import "../Estilos/PantallaCompleta.css";

const PantallaCompleta = (props) => {
  const [lista, setLista] = useState(props.peliculas);

  const cartaDetalles = () => {
    return lista.map((pelicula) => <CartaPelicula pelicula={pelicula} />);
  };
  const filtrarPorNombre = (e) => {
    setLista(
      [...props.peliculas].filter((x) => {
        return x.titulo.toLowerCase().includes(e.target.value.toLowerCase());
      })
    );
  };

  return (
    <div>
      <nav>
        <h1>Catálogo de mis peliculas favoritas</h1>
        <div className="input-boton">
          <input
            onChange={filtrarPorNombre}
            type="text"
            className="input"
            name="name"
            placeholder="Buscar"
          />
          <button id="botonOrdenar">Ordenar</button>
        </div>
      </nav>
      <section className="seccion-carta">{cartaDetalles()}</section>
    </div>
  );
};

export default PantallaCompleta;
