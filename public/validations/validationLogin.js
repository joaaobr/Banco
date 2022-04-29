function validationLogin() {
    const dados = getDados('_dados_user')
    const cpf = dados.cpf
    const nome = dados.nome
    const email = dados.email
    const obj = { nome, email, cpf }
    console.log(JSON.stringify(obj))
    POSThttp('/login', obj)
    .then(res => {
        // alert(res)
        console.log(res)
    })
    .catch(err => {
        alert("Dados Invalidos!!")
        setDados('_dados_user', JSON.stringify({ logado: false }))
        window.location.href = '/login'
        console.log(err)
    })
}

validationLogin()
setInterval(
    validationLogin
, 2500)