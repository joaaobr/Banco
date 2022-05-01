function terceiraEtapa() {
    const inpu1 = document.getElementById('cpf1')
    const inpu2 = document.getElementById('cpf2')
    const inpu3 = document.getElementById('cpf3')
    const inpu4 = document.getElementById('cpf4')
    const input5 = document.getElementById('idade')

    const input6 = document.getElementById('id')
    const id = input6.value

    const cpf1 = inpu1.value
    const cpf2 = inpu2.value
    const cpf3 = inpu3.value
    const cpf4 = inpu4.value
    const idade = input5.value


    if(cpf1.length > 3 || cpf2.length > 3 || cpf3.length > 3 || cpf4.length > 2) {
        inpu1.value = 0
        inpu2.value = 0
        inpu3.value = 0
        inpu4.value = 0
        return alert('Seu cpf é maior que o esperado!!')
    }

    if(cpf1.length < 3 || cpf2.length <3 || cpf3.length < 3 || cpf4.length < 2) {
        inpu1.value = 0
        inpu2.value = 0
        inpu3.value = 0
        inpu4.value = 0
        return alert('Seu cpf é menor que o esperado!!')
    }
    
    const cpf = cpf1 + cpf2 + cpf3 + cpf4
    const obj = { cpf, idade, id }

    console.log(cpf1.length, cpf2.length)

    console.log('obj: '+ obj)
    console.log('id: '+id)
    console.log('CPF: ' + cpf)
    console.log(idade)



   
    console.log(cpf)

    POSThttp('/update', obj)
    .then(res => {
        console.log(res)
        window.location.href = `/cad/quarta-etapa/${id}`
    })
    .catch(err => {
        alert(error)
        console.log(err)
    })
}
    
    