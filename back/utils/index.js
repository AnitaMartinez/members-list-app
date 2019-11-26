const axios = require('axios')

const isInteger = value => Number.isInteger(value)

const isString = value => typeof value === 'string'

const correctValueIfNeeded = (object, property, value) => {
    if(property === 'age') {
        if(isInteger(value)) {
            object[property] = value
        } else {
            object[property] = null
        }
    } else {
        if(isString(value)) {
            object[property] = value
        } else {
            object[property] = null
        }
    }
} 

const manageIncorrectData = members => {
    return new Promise(async (resolve, reject) => {
        let updatedMembers = []
        for(let i = 0; i < members.length; i++) {
            let object = {} 
            correctValueIfNeeded(object, 'age', members[i].age)
            if(members[i].age) {
                correctValueIfNeeded(object, 'age', members[i].age)
            } 
            if(members[i].bio) {
                correctValueIfNeeded(object, 'bio', members[i].bio)
            }
            if(members[i].name) {
                correctValueIfNeeded(object, 'name', members[i].name)
            }
            if(members[i].id) {
                object.id = members[i].id
            }
            if(members[i].image) {
                object.image = await updateUrlIfNeeded(members[i].image)
            }
            if(i % 20 === 0) console.log('Image updating, number item:', i, object.image)
            updatedMembers.push(object)
            if(i === (members.length - 1)) {
                resolve(updatedMembers)
            }
        }
    })
}

const updateUrlIfNeeded = url => {
    const defaultImageUrl = 'https://img.icons8.com/pastel-glyph/2x/person-male.png'
    return new Promise((resolve, reject) => {
        axios.get(url)
            .then(() => {
                resolve(url)
            })
            .catch(() => {
                resolve(defaultImageUrl)
            })
    }) 
}

module.exports = {
    manageIncorrectData
}
