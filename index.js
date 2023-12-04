const express = require('express')
const authroutesIndex = require('./router/index')
const dbconnect = require('./dbconnect')
const app = express()

app.use(express.json())
app.use('/api',authroutesIndex)

app.get('/',(req, res)=>{
    res.send('hello from backend :)')
})
dbconnect()
app.listen(4000,()=>{console.log('listening....');})