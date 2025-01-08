// lista.js
export const atualizarTotal = (tabela, totalGeral) => {
    let total = 0;
    const linhas = tabela.getElementsByTagName('tr');
  
    Array.from(linhas).forEach(row => {
      const checkbox = row.querySelector('.comprar');
      const totalItem = row.cells[4]?.textContent.split(' ')[1];
  
      if (checkbox && totalItem) {
        total += parseFloat(totalItem);
      }
    });
  
    totalGeral.textContent = `Total: R$ ${total.toFixed(2)}`;
  };
  