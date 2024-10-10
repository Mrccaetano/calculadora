const resultado = document.querySelector('.resultado')
const confirmar = document.querySelector('.igual')

function inserir( valor){
    resultado.innerHTML += valor;
}

function limpar() {
    resultado.innerHTML = '';
}

function apagar() {
    if(resultado.textContent){
        let resultado = document.getElementById('res').innerHTML
        res.innerHTML = resultado.substring(0,resultado.length -1);
    }

    
}

function confirma() {
    if(resultado.textContent != 'Erro') {
        document.getElementById('res').innerHTML = eval(resultado.innerHTML)
    }
}