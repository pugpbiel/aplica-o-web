const nomes = [];

function adicionarNome() {
  const input = document.getElementById('nome');
  const nome = input.value.trim();

  if (nome === "") {
    alert("Digite um nome válido.");
    return;
  }

  nomes.push(nome);
  alert(`Nome "${nome}" adicionado com sucesso!`);
  input.value = "";
}

function listarNomes() {
  const lista = document.getElementById('lista-nomes');
  lista.innerHTML = "";

  if (nomes.length === 0) {
    lista.innerHTML = "<li>Nenhum nome cadastrado.</li>";
    return;
  }

  nomes.forEach((nome) => {
    const li = document.createElement('li');
    li.textContent = nome;
    lista.appendChild(li);
  });
}

function buscarNome() {
  const busca = document.getElementById('busca').value.trim();
  const resultado = document.getElementById('resultado-busca');

  if (busca === "") {
    resultado.textContent = "Digite um nome para buscar.";
    resultado.style.color = "black";
    return;
  }

  if (nomes.includes(busca)) {
    resultado.textContent = `Nome "${busca}" encontrado!`;
    resultado.style.color = "green";
  } else {
    resultado.textContent = `Nome "${busca}" não encontrado.`;
    resultado.style.color = "red";
  }
}
