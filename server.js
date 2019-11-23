const express = require('express')
const bodyParser = require('body-parser')
var cors = require('cors')
const app = express()
const axios = require('axios')
var cron = require('node-cron')
const port = process.env.PORT || 5000
const routes = require('./back/routes')
const { saveInBD } = require('./back/db')

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/api/members', routes)

function populateDBWithMembers() {
    axios.get(`http://work.mediasmart.io/?page=1&page_size=900`, {
        headers: { Authorization: 'mediasmart2019'},
    })
    .then(response => {
        saveInBD(response.data)
    })
    .catch(error => {
        console.log('ERROR fetching data to mediasmart', error.message, error.data)
    })
}

populateDBWithMembers()

// At 01:00 on every day-of-week from Monday through Sunday
cron.schedule('00 01 * * 1-7', () => {
    console.log('Updated Database')
    populateDBWithMembers()
}, {
    timezone: "Etc/UTC"
});

app.listen(port, () => console.log(`Listening on port ${port}`))

