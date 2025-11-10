import React, { useState } from 'react';

function FormularioJuego({ onAgregar }) {
  const [titulo, setTitulo] = useState('');
  const [genero, setGenero] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!titulo) return;
    onAgregar({ titulo, genero });
    setTitulo('');
    setGenero('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: 20 }}>
      <input
        type="text"
        placeholder="Título del juego"
        value={titulo}
        onChange={(e) => setTitulo(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Género"
        value={genero}
        onChange={(e) => setGenero(e.target.value)}
      />
      <button type="submit">Agregar juego</button>
    </form>
  );
}

export default FormularioJuego;
