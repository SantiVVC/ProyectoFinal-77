import React, { useState } from 'react';

function FormularioJuego({ onAgregar }) {
  const [titulo, setTitulo] = useState('');
  const [genero, setGenero] = useState('');
  const [puntuacion, setPuntuacion] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();

    const nuevoJuego = {
      titulo,
      genero,
      puntuacion: Number(puntuacion),
    };

    onAgregar(nuevoJuego);
    setTitulo('');
    setGenero('');
    setPuntuacion(1);
  };

  return (
    <form className="formulario" onSubmit={handleSubmit}>
      <input
        className="input"
        type="text"
        placeholder="Título del juego"
        value={titulo}
        onChange={(e) => setTitulo(e.target.value)}
      />

      <input
        className="input"
        type="text"
        placeholder="Género"
        value={genero}
        onChange={(e) => setGenero(e.target.value)}
      />

      <div className="campo-puntuacion">
        <label className="label">Puntuación (1 a 5)</label>
        <input
          className="input-num"
          type="number"
          min="1"
          max="5"
          value={puntuacion}
          onChange={(e) => setPuntuacion(e.target.value)}
        />
      </div>

      <button className="btn-agregar" type="submit">Agregar juego</button>
    </form>
  );
}

export default FormularioJuego;
