function validationLogin() {
    const dados = getDados('_dados_user')
    const cpf = dados.cpf
    const nome = dados.nome
    const email = dados.email
    const obj = { nome, email, cpf }

    if(cpf == undefined || !email || !nome) {
        setDados('_dados_user', JSON.stringify({ logado: false }))
        window.location.href = '/login'
    }


    POSThttp('/login', obj)
    .then(res => {
    })
    .catch(err => {
        alert("Dados Invalidos!!")
        setDados('_dados_user', JSON.stringify({ logado: false }))
        window.location.href = '/login'
    })
}

validationLogin()
setInterval(
    validationLogin
, 1200)