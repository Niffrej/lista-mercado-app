$(document).ready(function () {
  
  // Adicionar um novo item à lista
  $("#adicionar").click(function () {
    const nomeProduto = $("#item").val().trim();
    const quantidade = parseInt($("#quantidade").val());
    const preco = parseFloat($("#preco").val()).toFixed(2);
    
    if (!nomeProduto || quantidade <= 0 || preco <= 0) {
      alert("Preencha os campos corretamente!");
      return;
    }

    const total = (quantidade * preco).toFixed(2);

    const itemHTML = `
      <tr>
        <td><input type="checkbox" class="comprar-checkbox"></td>
        <td class="nome-produto">${nomeProduto}</td>
        <td class="quantidade">${quantidade}</td>
        <td class="preco">R$ ${preco}</td>
        <td class="total">R$ ${total}</td>
        <td>
          <button class="editar">Editar</button>
          <button class="remover">Remover</button>
        </td>
      </tr>
    `;

    $("#lista-itens tbody").append(itemHTML);
    limparCampos();
    atualizarTotal();
  });

  // Remover item da lista
  $(document).on("click", ".remover", function () {
    $(this).closest("tr").remove();
    atualizarTotal();
  });

  // Editar item da lista
  $(document).on("click", ".editar", function () {
    const linha = $(this).closest("tr");
    const nome = linha.find(".nome-produto").text();
    const quantidade = linha.find(".quantidade").text();
    const preco = linha.find(".preco").text().replace("R$ ", "");

    $("#item").val(nome);
    $("#quantidade").val(quantidade);
    $("#preco").val(preco);

    linha.remove();
    atualizarTotal();
  });

  // Marcar como comprado
  $(document).on("change", ".comprar-checkbox", function () {
    $(this).closest("tr").toggleClass("item-comprado", this.checked);
  });

  // Atualizar total geral
  function atualizarTotal() {
    let totalGeral = 0;

    $("#lista-itens tbody tr").each(function () {
      const preco = parseFloat($(this).find(".preco").text().replace("R$ ", ""));
      const quantidade = parseInt($(this).find(".quantidade").text());
      totalGeral += preco * quantidade;
    });

    $("#total-geral").text(`Total: R$ ${totalGeral.toFixed(2)}`);
  }

  // Limpar campos do formulário
  function limparCampos() {
    $("#item").val("");
    $("#quantidade").val(1);
    $("#preco").val("");
  }
});
