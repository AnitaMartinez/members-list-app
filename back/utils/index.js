const axios = require('axios')

const manageIncorrectData = members => {
    return new Promise(async (resolve, reject) => {
        let updatedMembers = []
        
        for(let i = 0; i < members.length; i++) {
            
            let object = {} 

            if(members[i].age) {
                if(!Number.isInteger(members[i].age)) {
                    object.age = null
                } else {
                    object.age = members[i].age
                }
            } 
            if(members[i].bio) {
                if(typeof members[i].bio !== 'string') {
                    object.bio = null
                } else {
                    object.bio = members[i].bio
                }
            }
            if(members[i].name) {
                if(typeof members[i].name !== 'string') {
                    object.name = null
                } else {
                    object.name = members[i].name
                }
            }
            if(members[i].id) {
                object.id = members[i].id
            }
            if(members[i].image) {
                object.image = await updateUrl(members[i].image)
            }

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
