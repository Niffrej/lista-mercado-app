// ui.js
export const limparCampos = (itemInput, quantidadeInput, precoInput) => {
  itemInput.value = '';
  quantidadeInput.value = 1;
  precoInput.value = '';
};

export const atualizarBotao = (btnAdicionar, itemEditando) => {
  // Atualiza o texto do botão dependendo se está editando ou não
  if (itemEditando) {
    btnAdicionar.textContent = 'Editar';  // Muda para "Editar" quando editando
  } else {
    btnAdicionar.textContent = 'Adicionar';  // Caso contrário, mantém "Adicionar"
  }
};
