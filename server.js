const express = require('express')
const bodyParser = require('body-parser')
var cors = require('cors')
const app = express()
const axios = require('axios')
const MongoClient = require('mongodb').MongoClient
var cron = require('node-cron')
const port = process.env.PORT || 5000
const routes = require('./back/routes')

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/api/members', routes)

const pageNumber = 1
const pageSize = 500 //TODO: real size page

axios.get(`http://work.mediasmart.io/?page=${pageNumber}&page_size=${pageSize}`, {
    headers: { Authorization: 'mediasmart2019'},
})
.then(response => {
    const itemsNumber = response.headers['content-length']
    return {
        members: response.data,
        pagination: {
            pages: Math.ceil(itemsNumber / 2)
        }
    }
})
.then(data => {saveInDatabase(data)})
.catch(error => {
    console.log(error)
})

const saveInDatabase = data => {
    const url = 'mongodb://localhost:27017';
    const dbName = 'teamMembers';

    MongoClient.connect(url, (err, client) => {
        if(!err){
            const col = client.db(dbName).collection('members')
            col.deleteMany({}, (err, result) => { if(err) console.log(err) })
            col.insertMany(data.members, (err, result) => {if(err) console.log(err)}) 
            client.close()
        }
    })
}

// cron.schedule('* * * * *', () => {
//     console.log('running a task every minute');
// });

app.listen(port, () => console.log(`Listening on port ${port}`))

