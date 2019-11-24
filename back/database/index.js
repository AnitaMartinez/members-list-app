const MongoClient = require('mongodb').MongoClient

const url = 'mongodb://localhost:27017';
const dbName = 'teamMembers';

const saveInDb = data => {
    MongoClient.connect(url, (err, client) => {
        if(!err){
            const col = client.db(dbName).collection('members')
            col.deleteMany({}, (err, result) => { if(err) console.log(err) })
            col.insertMany(data, (err, result) => {if(err) console.log(err)}) 
            client.close()
        }
    })
}

const getMembersFromDb = (pageNumber, pageSize) => {
    return new Promise((resolve, reject) => {
        MongoClient.connect(url, (err, client) => {
            if(!err){
                const col = client.db(dbName).collection('members')
                const options = {
                    "limit": pageSize,
                    "skip": pageNumber * pageSize
                }
                col.find({}, options).toArray((err, members) => {
                    if (err) {
                        console.log('ERROR reading from database', err.message, err.data)
                        reject('Error', err)
                    } else {
                        resolve({members, pagination: {pages: 1}})  // TODO: pages: itemsNumber / page_sizes
                    }
                })
                client.close()
            }
        })
    })
}

module.exports = {
    saveInDb,
    getMembersFromDb
}
