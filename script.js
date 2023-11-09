document.getElementById('tela').innerHTML = localStorage.getItem('dados')

function leituraDados() {
    const dados = {
        nome: document.getElementById('nome').value,
        idade: document.getElementById('idade').value
    }

    localStorage.setItem('dados', JSON.stringify(dados))

    document.getElementById('tela').innerHTML = JSON.stringify(dados)
}

function removerDados() {
    localStorage.removeItem('dados')

    document.getElementById('tela').innerHTML
}
