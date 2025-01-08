// items.js
export const adicionarItem = (itemInput, quantidadeInput, precoInput, tabela, itemEditando) => {
  const nomeItem = itemInput.value.trim();
  const quantidade = Number(quantidadeInput.value);
  const preco = parseFloat(precoInput.value);
  const totalItem = (quantidade * preco).toFixed(2);

  if (nomeItem && quantidade > 0 && preco > 0) {
    if (itemEditando) {
      // Editando item existente
      itemEditando.cells[1].textContent = nomeItem;
      itemEditando.cells[2].textContent = quantidade;
      itemEditando.cells[3].textContent = `R$ ${preco.toFixed(2)}`;
      itemEditando.cells[4].textContent = `R$ ${totalItem}`;
    } else {
      // Adicionando novo item
      const row = tabela.insertRow();
      row.innerHTML = `
        <td><input type="checkbox" class="comprar"></td>
        <td>${nomeItem}</td>
        <td>${quantidade}</td>
        <td>R$ ${preco.toFixed(2)}</td>
        <td>R$ ${totalItem}</td>
        <td><button class="editar">Editar</button><button class="remover">Remover</button></td>
      `;
    }
  }
};
