function primeiraEtapa() {
    const input1 = document.getElementById('email')
    const email = input1.value
    const obj = { email }
    
    POSThttp('/create-acount', obj)
    .then(res => {
        console.log(res)
        const result = JSON.parse(res)
        console.log(result.id)
        setDados('_create_acount__id_', { id: result.id })
        window.location.href = `/cad/segunda-etapa/${ result.id }`
    })
    .catch(err => {
        console.log(err)
    })
}

