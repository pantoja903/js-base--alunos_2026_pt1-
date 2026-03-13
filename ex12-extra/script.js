function buscarCEP() {
    const cep = document.getElementById("cep").value.replace(/\D/g, ''); // Remove caracteres não numéricos

    if (cep.length !== 8) {
        alert("CEP deve ter 8 dígitos");
        return;
    }

    const url = `https://viacep.com.br/ws/${cep}/json/`;

    fetch(url)
        .then(resposta => resposta.json())
        .then(dados => {
            if (dados.erro) {
                alert("CEP não encontrado");
                return;
            }

            document.getElementById("endereco").value = dados.logradouro;
            document.getElementById("bairro").value = dados.bairro;
            // Adicionar campos para cidade e estado se necessário
        })
        .catch(erro => {
            console.log("Erro ao buscar CEP:", erro);
            alert("Erro ao buscar CEP");
        });
}

// Função para mostrar/ocultar campos de apartamento
document.getElementById("tipo").addEventListener("change", function() {
    const apartamentoCampos = document.getElementById("apartamentoCampos");
    if (this.value === "apartamento") {
        apartamentoCampos.style.display = "block";
    } else {
        apartamentoCampos.style.display = "none";
    }
});