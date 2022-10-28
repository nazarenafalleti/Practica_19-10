function addElemento(texto) {
  campo = document.getElementById("campo");
  h1 = document.createElement("h1");
  h1.innerHTML = texto;
  campo.appendChild(h1);
}
