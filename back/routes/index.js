const express = require('express');
const axios = require('axios')
const router = express.Router();
const { manageIncorrectData } = require('../utils')

router.get('/', (req, res) => {

    const { page, page_size } = req.query

    axios.get(`http://work.mediasmart.io/?page=${page}&page_size=${page_size}`, {
        headers: { Authorization: 'mediasmart2019'},
    })
        .then(response => {
            const itemsNumber = response.headers['content-length']
            const members = manageIncorrectData(response.data)
            return {
                data: members,
                pagination: {
                    pages: Math.ceil(itemsNumber / page_size)
                }
            }
        })
        .then(data => {
            res.json(data)
        })
        .catch(error => {
            console.log(error)
        })
})

module.exports = router
