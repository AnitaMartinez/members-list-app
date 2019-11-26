const express = require('express');
const router = express.Router();
const { getPaginatedMembers } = require('../database')

router.get('/', async (req, res) => {
    const { page, page_size } = req.query
    const pageNumber = parseInt(page)
    const pageSize = parseInt(page_size)
    try {
        const data = await getPaginatedMembers(pageNumber, pageSize)
        res.json(data)
    } catch (err) {
        console.log('Error router get', err)
        res.json({
            error: 'Failed to fetch'
        })
    }
})

module.exports = router





