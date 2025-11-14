import React from 'react';

function TarjetaJuego({ juego, onEliminar }) {
  return (
    <div className="card">
      <div className="info">
        <h2>{juego.titulo}</h2>
        <p><strong>Género:</strong> {juego.genero || 'Sin género'}</p>
        <p><strong>Puntuación:</strong> {juego.puntuacion} ⭐</p>
      </div>

      <button className="btn-eliminar" onClick={() => onEliminar(juego._id)}>
        Eliminar
      </button>
    </div>
  );
}

export default TarjetaJuego;
