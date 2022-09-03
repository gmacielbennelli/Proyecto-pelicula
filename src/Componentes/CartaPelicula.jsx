import React from "react";
import "../Estilos/CartaPelicula.css";

const CartaPelicula = (props) => {
  const imagen = require(`../Imagenes/${props.pelicula.imagen.toLowerCase()}.jpg`);
  return (
    <div className="img-titulo-pelicula">
      <img className="imagen-pelicula" src={imagen} alt="Logo" />
      <h2 className="titulo-pelicula">{props.pelicula.titulo}</h2>
    </div>
  );
};

export default CartaPelicula;
