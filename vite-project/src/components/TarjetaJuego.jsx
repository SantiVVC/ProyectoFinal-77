import React from 'react';

function TarjetaJuego({ juego, onEliminar }) {
  return (
    <div style={{
      border: '1px solid #ddd',
      borderRadius: 10,
      margin: 10,
      padding: 15,
      width: 200
    }}>
      <h3>{juego.titulo}</h3>
      <p>Género: {juego.genero || 'Sin género'}</p>
      <p>Horas: {juego.horasJugadas || 0}</p>
      <p>Puntuación: {juego.puntuacion || 0} ⭐</p>
      <button onClick={() => onEliminar(juego._id)}>Eliminar</button>
    </div>
  );
}

export default TarjetaJuego;
