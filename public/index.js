function createAcount() {
    const input1 = document.getElementById('name')
    const input2 = document.getElementById('email')
    const input3 = document.getElementById('senha')

    const nome = input1.value
    const email = input2.value
    const senha = input3.value


    const inpu1 = document.getElementById('cpf1')
    const inpu2 = document.getElementById('cpf2')
    const inpu3 = document.getElementById('cpf3')
    const inpu4 = document.getElementById('cpf4')

    const cpf1 = inpu1.value
    const cpf2 = inpu2.value
    const cpf3 = inpu3.value
    const cpf4 = inpu4.value

    if(cpf1.length > 3 || cpf2.length > 3 || cpf3.length > 3 || cpf4.length > 2) {
        inpu1.value = 0
        inpu2.value = 0
        inpu3.value = 0
        inpu4.value = 0
        return alert('Seu cpf é maior que o esperado!!')
    }

    const cpf = cpf1 + cpf2 + cpf3 + cpf4
    console.log(cpf)
    const obj = { nome, email, senha, cpf}
    
    POSThttp('/createAcount', obj)
    .then(res => {
        console.log(res)
    })
    .catch(err => {
        console.log(err)
    })
}

