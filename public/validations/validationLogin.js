function validationLogin() {
    const dados = getDados('_dados_user')
    const cpf = dados.cpf
    const nome = dados.nome
    const email = dados.email
    const saldo = dados.saldo
    const id = dados.id
    const obj = { nome, email, cpf, saldo, id }

    if(cpf == undefined || !email || !nome) {
        setDados('_dados_user', JSON.stringify({ logado: false }))
        window.location.href = '/login'
    }


    POSThttp('/login', obj)
    .then(res => {
    })
    .catch(err => {
        window.location.reload()
        alert("Dados Invalidos!!")
        setDados('_dados_user', JSON.stringify({ logado: false }))
        window.location.href = '/login'
    })
}

validationLogin()
setInterval(
    validationLogin
, 1200)