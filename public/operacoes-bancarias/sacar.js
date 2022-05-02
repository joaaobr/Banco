function sacar() {
    let input1 = document.getElementById('sacar')
    let sacar = input1.value

    const dados = getDados('_dados_user')

    sacar = parseInt(sacar)

    let saldo1 = dados.saldo

    let saldo = parseInt(saldo1 - sacar)

    //alert(saldo)

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