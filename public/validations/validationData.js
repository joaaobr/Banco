function validationLogado() {
    const dados = getDados('_dados_user')
    if((!dados.logado)) {
        setDados('_dados_user', JSON.stringify({logado: false}))
        window.location.href = '/login'
    } else if(dados.logado != true) {
        setDados('_dados_user', JSON.stringify({logado: false}))
    }
}

validationLogado()

setInterval(
    validationLogado
, 1200)