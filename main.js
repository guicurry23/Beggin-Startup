// main.js
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('metaForm');
  const metaList = document.getElementById('metaList');

  form.addEventListener('submit', (event) => {
    event.preventDefault(); // Evita o comportamento padrão do formulário

    // Obtém os valores dos campos do formulário
    const meta = document.getElementById('meta').value;
    const prazo = document.getElementById('prazo').value;
    const valorMeta = document.getElementById('valor-meta').value;

    // Cria um novo item da lista com as informações fornecidas
    const listItem = document.createElement('li');
    listItem.className = 'list-group-item';
    listItem.innerHTML = `
      <h5>${meta}</h5>
      <p><strong>Prazo:</strong> ${prazo}</p>
      <p><strong>Valor:</strong> R$ ${valorMeta}</p>
    `;

    // Adiciona o novo item à lista
    metaList.appendChild(listItem);

    // Limpa o formulário
    form.reset();
  });
});
