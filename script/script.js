document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registroForm');
    const mensagemDiv = document.getElementById('mensagem');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Impede o envio do formulário padrão

        const nomeInput = document.getElementById('nome');
        const nome = nomeInput.value.trim(); // Obtém o valor do input e remove espaços em branco no início e no final

        if (nome === '') {
            exibirMensagem('Por favor, insira um nome.', 'error');
        } else {
            // Aqui você pode enviar o nome para o backend, armazená-lo em um banco de dados, etc.
            exibirMensagem(`Nome registrado com sucesso: ${nome}`, 'success');
            nomeInput.value = ''; // Limpa o campo de entrada após o registro
        }
    });

    function exibirMensagem(mensagem, tipo) {
        mensagemDiv.textContent = mensagem;
        mensagemDiv.className = tipo; // Define a classe CSS com base no tipo de mensagem (error ou success)
        setTimeout(() => {
            mensagemDiv.textContent = ''; // Limpa a mensagem após alguns segundos
        }, 3000); // 3000 milissegundos = 3 segundos
    }
});
