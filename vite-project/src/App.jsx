import React, { useEffect, useState } from 'react';
import { getJuegos, addJuego, deleteJuego } from './services/api';
import TarjetaJuego from './components/TarjetaJuego';
import FormularioJuego from './components/FormularioJuego';

function App() {
  const [juegos, setJuegos] = useState([]);

  useEffect(() => {
    getJuegos().then(setJuegos).catch(console.error);
  }, []);

  const handleAgregar = async (juego) => {
    const nuevo = await addJuego(juego);
    setJuegos([...juegos, nuevo]);
  };

  const handleEliminar = async (id) => {
    await deleteJuego(id);
    setJuegos(juegos.filter(j => j._id !== id));
  };

  return (
    <div className="contenedor">
      <h1>🎮 Proyecto Final 77 - GameTracker</h1>

      <FormularioJuego onAgregar={handleAgregar} />

      <div className="contenedor-tarjetas">
        {juegos.map(j => (
          <TarjetaJuego key={j._id} juego={j} onEliminar={handleEliminar} />
        ))}
      </div>
    </div>
  );
}

export default App;
