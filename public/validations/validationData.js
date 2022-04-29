function validationLogin() {
    const dados = getDados('_dados_user')

    if((dados.logado)) {
        setDados('_dados_user', JSON.stringify({logado: false}))
        window.location.href = '/login'
    }
}

//validationLogin()

setInterval(() => {
    //validationLogin()
}, 1000)