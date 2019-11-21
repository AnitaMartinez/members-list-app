const manageIncorrectData = data => {
    return data.map(member => {
        if(!Number.isInteger(member.age)) {
            member.age = null
        }
        if(typeof member.bio !== 'string') {
            member.bio = null
        }
        if(typeof member.name !== 'string') {
            member.name = null
        }
        if(typeof member.image !== 'string') {
            member.image = null
        }
        return member
    })
}

module.exports = {
    manageIncorrectData
}
