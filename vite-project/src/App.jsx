import React, { useEffect, useState } from 'react';
import { getJuegos, addJuego, deleteJuego } from './services/api';
import TarjetaJuego from './components/TarjetaJuego';
import FormularioJuego from './components/FormularioJuego';

function App() {
  const [juegos, setJuegos] = useState([]);

  // Cargar los juegos al iniciar
  useEffect(() => {
    getJuegos().then(setJuegos).catch(console.error);
  }, []);

  // Agregar un nuevo juego
  const handleAgregar = async (juego) => {
    const nuevo = await addJuego(juego);
    setJuegos([...juegos, nuevo]);
  };

  // Eliminar un juego
  const handleEliminar = async (id) => {
    await deleteJuego(id);
    setJuegos(juegos.filter(j => j._id !== id));
  };
     }
