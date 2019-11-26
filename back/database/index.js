const MongoClient = require('mongodb').MongoClient

const url = 'mongodb://localhost:27017';
const dbName = 'teamMembers';

const saveInDb = data => {
    MongoClient.connect(url, (err, client) => {
        if(!err){
            const colMembers = client.db(dbName).collection('members')
            const colPagination = client.db(dbName).collection('pagination')
            colMembers.deleteMany({}, (err, result) => { 
                if(err) {
                    console.log('Error removing items from db', err) 
                } else {
                    colMembers.insertMany(data, (err, result) => {
                        if(err) {
                            console.log('Error inserting items to db', err)
                        } else {
                            savePagination(colPagination, data, () => client.close())
                        }
                    })
                }
            })
            
        }
    })
}

const savePagination = (colPagination, data, done) => {
    colPagination.deleteOne({}, (err, result) => {
        if(err) {
            console.log('Error removing pagination from db', err) 
        } else {
            colPagination.insertOne({itemsNumber: data.length})
            done()
        }
    })
}

const getPaginatedMembers = (pageNumber, pageSize) => {
    return new Promise((resolve, reject) => {
        MongoClient.connect(url, (err, client) => {
            if(!err){
                const col = client.db(dbName).collection('members')
                const colPagination = client.db(dbName).collection('pagination')
                const options = {
                    "limit": pageSize,
                    "skip": pageNumber * pageSize
                }
                col.find({}, options).toArray((err, members) => {
                    if (err) {
                        console.log('ERROR reading from database', err.message, err.data)
                        reject('Error', err)
                    } else {
                        colPagination.find({}, {itemsNumber: 1}).toArray((err, result) => {
                            if(err) {
                                console.log('ERROR reading from database', err.message, err.data)
                                reject('Error', err)
                            } else {
                                const itemsNumber = result.length > 0 && result[0].itemsNumber && result[0].itemsNumber
                                resolve({members, pagination: {pages: Math.floor(itemsNumber / pageSize)}})
                                client.close()
                            }
                        })
                    }
                })
            }
        })
    })
}

module.exports = {
    saveInDb,
    getPaginatedMembers
}
