// storage.js
export const salvarItens = (itens) => {
  localStorage.setItem('itens', JSON.stringify(itens));
};

export const carregarItens = () => {
  const itens = localStorage.getItem('itens');
  return itens ? JSON.parse(itens) : [];
};
