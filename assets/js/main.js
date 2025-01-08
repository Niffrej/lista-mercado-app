import { adicionarItem } from "./modules/items.js";
import { atualizarLista } from "./modules/lista.js";
import { salvarNoStorage, carregarDoStorage } from "./modules/storage.js";
import { renderizarLista } from "./modules/ui.js";

document.addEventListener("DOMContentLoaded", () => {
    atualizarLista();
});

document.getElementById("adicionar").addEventListener("click", () => {
    const item = document.getElementById("item").value;
    const quantidade = parseInt(document.getElementById("quantidade").value);
    const preco = parseFloat(document.getElementById("preco").value);

    if (item && quantidade > 0 && preco > 0) {
        const novoItem = adicionarItem(item, quantidade, preco);
        let lista = carregarDoStorage();
        lista.push(novoItem);
        salvarNoStorage(lista);
        atualizarLista();
    }
});
