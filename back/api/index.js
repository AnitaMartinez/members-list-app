const axios = require('axios')

const limitPerPage = 500

const getMembersByPage = (pageNumber = 1) => {
    return new Promise((resolve, reject) => {
        axios.get(`http://work.mediasmart.io/?page=${pageNumber}&page_size=${limitPerPage}`, {
            headers: { Authorization: 'mediasmart2019'},
        })
            .then(response => {
                resolve(response.data)
            })
            .catch(error => {
                console.log('Error fetching data from mediasmart', error.message, error.data)
                reject(error)
            })
    })
}

const getAllMembers = async (pageNumber = 1) => {
    const members = await getMembersByPage(pageNumber)
    if(members.length > 0) {
        return members.concat(await getAllMembers(pageNumber + 1))
    } else {
        return members
    }
}

module.exports = {
    getAllMembers
}