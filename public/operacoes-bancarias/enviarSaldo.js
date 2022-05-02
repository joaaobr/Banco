function enviarSaldo() {
    const input1 = document.getElementById('CPFenviado')
    const input2 = document.getElementById('SALDOenviado')

    const cpf = parseInt(input1.value)
    const saldo = parseInt(input2.value)

    const obj = { cpf, saldo }

    POSThttp('EnviarSaldo', obj)
    .then(res => {
        setDados('_dados__e_', res)
    })
    .catch(err => {
        console.log(err)
        alert(err)
    })
}