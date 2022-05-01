function adicionar() {
    const dados = getDados('_dados_user')
    const input1 = document.getElementById('saldo2')
    const saldo = input1.value
    console.log(saldo)
    const id = dados.id
    
    const obj = { saldo, id }
    console.log(obj)

    
    POSThttp('/update', obj)
    .then(res => {
        //console.log('update: '+res.saldo)
        setDados('_dados_user', res )
        window.location.reload()
    })
    .catch(err => {
        console.log(err)
    })
}