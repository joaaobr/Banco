const h1 = document.getElementById('name')
const h2 = document.getElementById('cpf')

const name = h1.value
const cpf = h2.value

const dados  = getDados('_dados_user')

const text1 = document.createTextNode(dados.nome)
console.log(text1)
h1.appendChild(text1)


const text2 = document.createTextNode(dados.cpf)
h2.appendChild(text2)