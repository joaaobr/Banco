function segundaEtapa() {
    const input1 = document.getElementById('nome')
    const input2 = document.getElementById('sobrenome')
    const input3 = document.getElementById('id')

    //getDados('_create_acount__id_')
    const id  = input3.value
    const nome = input1.value
    const sobrenome = input2.value

    const obj = { nome, sobrenome, id }

    
    
    
    POSThttp('/update', obj)
    .then(res => {
        console.log(res)
        window.location.href = `/cad/terceira-etapa/${id}`
    })
    .catch(err => {
        console.log(err)
    })  
}