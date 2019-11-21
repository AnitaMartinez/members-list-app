const express = require('express')
const bodyParser = require('body-parser')
var cors = require('cors')
const axios = require('axios')
const app = express()
const port = process.env.PORT || 5000

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/api/members', (req, res) => {

  const { page, page_size } = req.query

  axios.get(`http://work.mediasmart.io/?page=${page}&page_size=${page_size}`, {
    headers: { Authorization: 'mediasmart2019'},
  })
    .then(response => {
      const itemsNumber = response.headers['content-length']
      res.json({
        data: response.data,
        pagination: {
          pages: Math.ceil(itemsNumber / page_size)
        } 
      })
    })
    .catch(error => {
      console.log(error)
    })
})

app.listen(port, () => console.log(`Listening on port ${port}`))

