export function adicionarItem(nome, quantidade, preco) {
  return {
      nome,
      quantidade,
      preco,
      total: quantidade * preco
  };
}
