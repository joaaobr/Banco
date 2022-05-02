const h1 = document.getElementById('name')
const h2 = document.getElementById('cpf')
const p1 = document.getElementById('saldo')
const name = h1.value
const cpf = h2.value
const saldo = p1.value

const dados  = getDados('_dados_user')

const text1 = document.createTextNode(dados.nome + ' ' + dados.sobrenome)
console.log(text1)
h1.appendChild(text1)


const text2 = document.createTextNode(dados.cpf)
h2.appendChild(text2)

if(dados.saldo == undefined) {
    const text4 = document.createTextNode('Não tem nenhum saldo!')
    p1.appendChild(text4)
} else if(dados.saldo > 0) {
    const text3 = document.createTextNode(dados.saldo)
    p1.appendChild(text3)
}