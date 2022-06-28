
const inputNome = document.getElementById('nome')
const inputIdade = document.getElementById('idade')
const inputAltura = document.getElementById('altura')
const inputPeso = document.getElementById('peso')

const botaoCalcular = document.getElementById('calcular')
const botaoLimpar = document.getElementById('limpar')
const divResultadoDados = document.getElementById('resultado-dados')
const divResultadoImc = document.getElementById('resultado-imc')

botaoCalcular.addEventListener('click', calcular)
botaoLimpar.addEventListener('click', limpar)

function calcular() {
    const peso = inputPeso.value
    const altura = inputAltura.value
    const nome = inputNome.value
    const idade = inputIdade.value
    let mensagem = ''

    if(nome && idade && altura && peso) {
        const imc = (peso / (altura ** 2)).toFixed(1)
        const qtdAgua = (0.035 * peso).toFixed(1)
    
        if(imc < 18.5) {
            mensagem = 'Abaixo do peso'
        } else if(imc < 25) {
            mensagem = 'Peso normal'
        } else if(imc < 30) {
            mensagem = 'Sobrepeso'
        } else if(imc < 35) {
            mensagem = 'Obesidade Grau I'
        } else if(imc < 40) {
            mensagem = 'Obesidade Grau II'
        } else {
            mensagem = 'Obesidade Grau III'
        }
    
        divResultadoDados.innerHTML = nome + "<br />" + idade + ' anos' + "<br />" + 'Altura (m): ' + altura + "<br />" + 'Peso (kg): ' + peso + "<br />" 
            
        divResultadoImc.innerHTML = 'Seu IMC é: ' + imc + "<br />" + 'Situação: ' + mensagem + "<br />" + 'Você precisa ingerir ' + qtdAgua + ' litros de água por dia!' 
    }                     
}

function limpar() {
    inputNome.value = ''
    inputIdade.value = ''
    inputAltura.value = ''
    inputPeso.value = ''

    divResultadoDados.innerHTML = ''
    divResultadoImc.innerHTML = ''
}