const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const MongoClient = require('mongodb').MongoClient;

const uri = "mongodb+srv://M8B7D3s6:<password>@cluster0.nnwjg.mongodb.net/<dbname>?retryWrites=true&w=majority";
MongoClient.connect(uri, (err, client) =>{
    if (err) return console.log(err)
    db = client.db('crud-nodeJs')// coloque o nome do seu banco
})

app.listen(3000, function(){
    console.log('server running on port 3000')
})

app.use(bodyParser.urlencoded({ extended: true}))



app.set('view engine', 'ejs')

app.get('/', (req, res) =>{
    res.render('index.ejs')
})

app.post('/show', (req, res)=>{
    console.log(req.body)
})
