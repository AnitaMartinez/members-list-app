const axios = require('axios')

const isInteger = value => Number.isInteger(value)
const isString = value => typeof value === 'string'

const manageIncorrectData = members => {
    return new Promise(async (resolve, reject) => {
        let updatedMembers = []

        for(let i = 0; i < members.length; i++) {
            let object = {} 
            if(members[i].age) {
                if(isInteger(members[i].age)) {
                    object.age = members[i].age
                } else {
                    object.age = null
                }
            } 
            if(members[i].bio) {
                if(isString(members[i].bio)) {
                    object.bio = members[i].bio
                } else {
                    object.bio = null
                }
            }
            if(members[i].name) {
                if(isString(members[i].bio)) {
                    object.name = members[i].name
                } else {
                    object.name = null
                }
            }
            if(members[i].id) {
                object.id = members[i].id
            }
            if(members[i].image) {
                object.image = await updateUrl(members[i].image)
            }
            if(i % 20 === 0) console.log('Image updating, number item:', i, object.image)
            updatedMembers.push(object)

            if(i === (members.length - 1)) {
                resolve(updatedMembers)
            }
        }
    })
}

const updateUrl = url => {
    return new Promise((resolve, reject) => {
        axios.get(url)
            .then(() => {
                resolve(url)
            })
            .catch(() => {
                resolve('https://img.icons8.com/pastel-glyph/2x/person-male.png')
            })
    }) 
}

module.exports = {
    manageIncorrectData
}
