const express = require('express');
const router = express.Router();
// const { manageIncorrectData } = require('../utils')
const MongoClient = require('mongodb').MongoClient


router.get('/', (req, res) => {
    
    const { page, page_size } = req.query
    const pageNumber = parseInt(page)
    const pageSize = parseInt(page_size)
    const url = 'mongodb://localhost:27017';
    const dbName = 'teamMembers';

    MongoClient.connect(url, (err, client) => {
        if(!err){
            const col = client.db(dbName).collection('members')
            const options = {
                "limit": pageSize,
                "skip": pageNumber * pageSize
            }
            col.find({}, options).toArray((err, members) => {
                if (err) {
                    console.log('Error fetching data from database', err)
                } else {
                    res.json({members, pagination: {pages: 1}}) // TODO: pages: itemsNumber / page_sizes
                }
            })
            client.close()
        }
    })
})

module.exports = router





