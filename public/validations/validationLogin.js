function validationLogin() {
    const dados = getDados('_dados_user')
    const nome = dados.nome
    const cpf = dados.cpf

    const obj = { nome, cpf }

    console.log(obj)
    alert(obj)
    console.log(obj)

    POSThttp('/login', obj)
    .then(res => {
        alert(res)
        console.log(res)
    })
    .catch(err => {
        console.log(err)
        alert(err)
        //window.location.href = '/login'
        setDados('_dados_user', JSON.stringify({ logado: false }) )
        console.log(err)
    })
}

//validationLogin()

setInterval(() => {
    validationLogin()
}, 1200)