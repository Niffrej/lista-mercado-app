import { carregarDoStorage } from "./storage.js";
import { renderizarLista } from "./ui.js";

export function atualizarLista() {
    const lista = carregarDoStorage();
    renderizarLista(lista);
}
