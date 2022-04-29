function login() {
    // const input1 = document.getElementById('email')
    const input2 = document.getElementById('senha')
    const input3 = document.getElementById('cpf')
    const cpf = input3.value
    // const email = input1.value
    const senha = input2.value
    const obj = { cpf, senha }
    console.log(obj)

    POSThttp('/login', obj)
    .then(res => {
        window.location.href = '/'
        setDados('_dados_user', res)
        console.log(res)
    })
    .catch(err => {
        console.log(err)
    })
}