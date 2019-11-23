const express = require('express');
const router = express.Router();
const { getMembersFromBD } = require('../db')

router.get('/', async (req, res) => {
    const { page, page_size } = req.query
    const pageNumber = parseInt(page)
    const pageSize = parseInt(page_size)

     const data = await getMembersFromBD(pageNumber, pageSize)
     res.json(data)
})

module.exports = router





