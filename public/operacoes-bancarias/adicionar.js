function adicionar() {
    const dados = getDados('_dados_user')
    const input1 = document.getElementById('saldo2')
    let saldo1 = input1.value
    const id = dados.id
    //saldo = saldo + dados.saldo

    saldo1 = parseInt(saldo1)
    
    let saldo = saldo1 + dados.saldo
    const obj = { saldo, id }
    console.log(obj)
    console.log(saldo)
    alert(saldo + dados.saldo)
    alert(typeof saldo1)

    
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