const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

let moodLog = [];

app.post('/api/mood', (req, res) => {
  const { mood, note } = req.body;
  const entry = {
    mood,
    note,
    timestamp: new Date().toISOString()
  };
  moodLog.push(entry);
  res.json({ message: 'Estado guardado', entry });
});

app.get('/api/mood', (req, res) => {
  res.json(moodLog);
});

app.post('/api/chat', (req, res) => {
  const { message } = req.body;
  const lowerMsg = message.toLowerCase();

  let reply = "Gracias por compartirlo. Estoy aquí contigo.";
  if (lowerMsg.includes("ansiedad")) {
    reply = "¿Quieres probar una técnica de respiración para calmar tu ansiedad?";
  } else if (lowerMsg.includes("triste") || lowerMsg.includes("depresión")) {
    reply = "Lamento que te sientas así. Recuerda que no estás solo/a. Estoy contigo.";
  } else if (lowerMsg.includes("feliz")) {
    reply = "¡Me alegra saber eso! ¿Qué hizo que te sintieras así hoy?";
  }

  res.json({ reply });
});

app.get('/api/anxiety/breathing', (req, res) => {
  const steps = [
    "Inhala profundamente por 4 segundos",
    "Mantén el aire por 4 segundos",
    "Exhala lentamente por 6 segundos",
    "Repite este ciclo por 2 minutos"
  ];
  res.json({ steps });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor en http://localhost:${PORT}`);
});
