const express = require('express')
const app = express()
const UserModel = require('./models/connect.user')



app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.json())
app.use(express.static(__dirname + '/public'))

//1 ok
app.get('/cad/primeira-etapa', (req, res) => {
    res.render('create-acount/primeira-etapa')
})

// 2 
app.get('/cad/segunda-etapa/:id', (req, res) => {
    const id = req.params.id
    res.render('create-acount/segunda-etapa', { id })
})

// 3
app.get('/cad/terceira-etapa/:id', (req, res) => {
    const id = req.params.id
    res.render('create-acount/terceira-etapa', { id })
})
// 4
app.get('/cad/quarta-etapa/:id', (req, res) => {
    const id = req.params.id
    res.render('create-acount/quarta-etapa', { id })
})


app.get('/login', (req, res) => {
    res.render('login')
})

app.post('/login', async(req, res) => {
    try {
        const users = await UserModel.find(req.body)
         console.log('Body: '+req.body)
         console.log(users[0])
        if(users[0]) {
            const dados = {
                nome: users[0].nome,
                cpf: users[0].cpf,
                email: users[0].email,
                logado: true
            }

            
            //console.log(dados)
            res.status(200).json(dados)
        }else if(users[0] == undefined) {
            res.status(500).json({ logado: false })
        }
        
    } catch (error) {
        console.log(error)
        res.status(500).json({error})
    }
})


app.post('/create-acount', async(req, res) => {
    try {
        console.log(req.body)
        const user = await UserModel.create(req.body)
        console.log('user: '+ user)
        const idUser = user
        console.log('ID: '+user._id)
        res.status(201).json({ id: user._id })
    }
    catch(error) {
        console.log(error)
        res.status(500).json(error)
    }
})


app.post('/update', async(req, res) => {
    try {
        //const id = req.params.id
        console.log(req.body)
        console.log('id: '+ req.body.id)
        const user = await UserModel.findByIdAndUpdate(req.body.id, req.body, {new: true}) 
        console.log(user)
        res.status(200).json(user)
    } catch (error) {
        console.log(error)
        res.status(500).json(error)
    }
})



app.get('/', (req, res) => {
    res.render('index')
})







app.listen(3003)