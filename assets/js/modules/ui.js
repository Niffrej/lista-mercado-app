export function renderizarLista(lista) {
  const tbody = document.querySelector("#lista-itens tbody");
  tbody.innerHTML = "";
  
  let totalGeral = 0;

  lista.forEach((item, index) => {
      let tr = document.createElement("tr");
      tr.innerHTML = `
          <td><input type="checkbox"></td>
          <td contenteditable="true" class="editavel" data-index="${index}" data-field="nome">${item.nome}</td>
          <td contenteditable="true" class="editavel" data-index="${index}" data-field="quantidade">${item.quantidade}</td>
          <td contenteditable="true" class="editavel" data-index="${index}" data-field="preco">R$ ${item.preco.toFixed(2)}</td>
          <td>R$ ${item.total.toFixed(2)}</td>
          <td>
              <button class="editar" data-index="${index}">Salvar</button>
              <button class="remover" data-index="${index}">Remover</button>
          </td>
      `;
      tbody.appendChild(tr);
      totalGeral += item.total;
  });

  document.getElementById("total-geral").textContent = `Total: R$ ${totalGeral.toFixed(2)}`;

  // Adiciona eventos para remover itens
  document.querySelectorAll(".remover").forEach((botao) => {
      botao.addEventListener("click", (event) => {
          const index = event.target.getAttribute("data-index");
          removerItem(index);
      });
  });

  // Adiciona eventos para editar itens
  document.querySelectorAll(".editar").forEach((botao) => {
      botao.addEventListener("click", (event) => {
          const index = event.target.getAttribute("data-index");
          editarItem(index);
      });
  });
}

function removerItem(index) {
  let lista = JSON.parse(localStorage.getItem("listaDeCompras")) || [];
  lista.splice(index, 1);
  localStorage.setItem("listaDeCompras", JSON.stringify(lista));
  renderizarLista(lista);
}

function editarItem(index) {
  let lista = JSON.parse(localStorage.getItem("listaDeCompras")) || [];
  
  let linha = document.querySelectorAll(`tr`)[index + 1]; // Pega a linha correta
  let nome = linha.children[1].textContent.trim();
  let quantidade = parseInt(linha.children[2].textContent.trim());
  let preco = parseFloat(linha.children[3].textContent.replace("R$ ", "").trim());

  if (nome && quantidade > 0 && preco > 0) {
      lista[index].nome = nome;
      lista[index].quantidade = quantidade;
      lista[index].preco = preco;
      lista[index].total = quantidade * preco;

      localStorage.setItem("listaDeCompras", JSON.stringify(lista));
      renderizarLista(lista);
  } else {
      alert("Por favor, insira valores válidos.");
  }
}
