const express = require('express');
const bodyparser = require('body-parser');
const path = require('path')
// we import cors to connect front end with back end be cause each one 
// in different host ,so we use cors to run 
// both of them in the same host
const cors = require('cors');



const PORT = 3000
const api = require('./routes/api')

const app = express()
app.use(express.static('../ngApp/dist/ngApp'))
app.get('/*', (req,res) => {
    res.sendFile(path.join(__dirname, '../ngApp/dist/ngApp/index.html'));
});
app.use(cors())

app.use(bodyparser.json())

app.use('/api', api)

app.get('/', function(req, res){
    res.send('hello from server')
})

app.listen(process.env.PORT || 3000, function(){
    console.log('server running on localhost:' + PORT)
})