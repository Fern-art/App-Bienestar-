function guardarEstado() {
  const mood = document.getElementById("mood").value;
  if (!mood) return;
  const historial = document.getElementById("historial");
  const entry = document.createElement("p");
  entry.textContent = new Date().toLocaleString() + ": " + mood;
  historial.appendChild(entry);
  localStorage.setItem("estado", historial.innerHTML);
}
function enviarChat() {
  const input = document.getElementById("chatInput").value;
  const chatBox = document.getElementById("chatBox");
  const response = "Gracias por compartir: " + input;
  chatBox.innerHTML += "<p><strong>Tú:</strong> " + input + "</p>";
  chatBox.innerHTML += "<p><strong>App:</strong> " + response + "</p>";
}
function respirar() {
  const texto = document.getElementById("breathText");
  const audio = document.getElementById("relaxAudio");
  texto.textContent = "Inhala...";
  audio.play();
  setTimeout(() => { texto.textContent = "Sostén..."; }, 4000);
  setTimeout(() => { texto.textContent = "Exhala..."; }, 8000);
  setTimeout(() => { texto.textContent = ""; }, 12000);
}
function toggleModo() {
  const dark = getComputedStyle(document.body).getPropertyValue('--bg') !== "#ffffff";
  document.body.style.setProperty('--bg', dark ? "#ffffff" : "#222222");
  document.body.style.setProperty('--fg', dark ? "#000000" : "#ffffff");
}
window.onload = () => {
  const data = localStorage.getItem("estado");
  if (data) document.getElementById("historial").innerHTML = data;
}