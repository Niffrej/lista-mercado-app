export function salvarNoStorage(lista) {
  localStorage.setItem("listaDeCompras", JSON.stringify(lista));
}

export function carregarDoStorage() {
  return JSON.parse(localStorage.getItem("listaDeCompras")) || [];
}
