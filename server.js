const express = require('express')
const bodyParser = require('body-parser')
var cors = require('cors')
const app = express()
var cron = require('node-cron')
const routes = require('./back/routes')
const { saveInDb } = require('./back/database')
const { manageIncorrectData } = require('./back/utils')
const { getAllMembers } = require('./back/api')
const port = process.env.PORT || 5000

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/api/members', routes)

const populateDbWithMembers = async () => {
    const allMembers = await getAllMembers()
    const updatedDataMembers = await manageIncorrectData(allMembers)
    saveInDb(updatedDataMembers)
}

populateDbWithMembers()

// At 01:00 on every day-of-week from Monday through Sunday
cron.schedule('00 01 * * 1-7', () => {
    console.log('Updated Database')
    populateDbWithMembers()
}, {
    timezone: "Etc/UTC"
});

app.listen(port, () => console.log(`Listening on port ${port}`))

