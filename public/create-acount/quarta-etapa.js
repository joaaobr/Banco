function quartaEtapa() {
    const input1 = document.getElementById('senha')
    const input2 = document.getElementById('confirmSenha')
    const input3 = document.getElementById('id')

    //getDados('_create_acount__id_')
    const id  = input3.value
    const senha = input1.value
    const confirmSenha = input2.value

    const obj = { senha, id }

    if(senha != confirmSenha) {
        alert('suas senhas não condizem!')
    }

    console.log(obj)

    
    if(senha == confirmSenha) {
        POSThttp('/update', obj)
        .then(res => {
            console.log(res)
            window.location.href = '/login'
        })
        .catch(err => {
            console.log(err)
        })  
    }    
}