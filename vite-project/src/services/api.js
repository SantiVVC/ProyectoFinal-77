const API_URL = 'http://localhost:5000/api'; // URL de tu backend local

// --- Juegos ---
export async function getJuegos() {
  const res = await fetch(`${API_URL}/juegos`);
  return res.json();
}

export async function addJuego(juego) {
  const res = await fetch(`${API_URL}/juegos`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(juego)
  });
  return res.json();
}
export async function deleteJuego(id) {
  await fetch(`${API_URL}/juegos/${id}`, { method: 'DELETE' });
}

// --- Reseñas ---
export async function getResenas() {
  const res = await fetch(`${API_URL}/resenas`);
  return res.json();
}

export async function addResena(resena) {
  const res = await fetch(`${API_URL}/resenas`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(resena)
  });
  return res.json();
}

