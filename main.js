document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('metaForm');
    const metaList = document.getElementById('metaList');
  
    form.addEventListener('submit', (e) => {
      e.preventDefault(); // Impede o envio do formulário
  
      const metaInput = document.getElementById('meta');
      const prazoInput = document.getElementById('prazo');
      const valorInput = document.getElementById('valor-meta');
  
      const meta = metaInput.value.trim();
      const prazo = prazoInput.value;
      const valor = parseFloat(valorInput.value).toFixed(2);
  
      if (meta && prazo && !isNaN(valor) && valor > 0) {
        addMetaToList(meta, prazo, valor);
        form.reset(); // Limpa o formulário após adicionar a meta
      } else {
        alert('Por favor, preencha todos os campos corretamente.');
      }
    });
  
    function addMetaToList(meta, prazo, valor) {
      const listItem = document.createElement('li');
      listItem.className = 'list-group-item d-flex justify-content-between align-items-center';
  
      listItem.innerHTML = `
        <div>
          <h5>${meta}</h5>
          <p><strong>Prazo:</strong> ${new Date(prazo).toLocaleDateString('pt-BR')}</p>
          <p><strong>Valor:</strong> R$ ${valor}</p>
        </div>
        <button class="btn btn-danger btn-sm" onclick="removeMeta(this)">Excluir</button>
      `;
  
      metaList.appendChild(listItem);
    }
  });
  
  function removeMeta(button) {
    const listItem = button.parentElement;
    listItem.remove();
  }
  