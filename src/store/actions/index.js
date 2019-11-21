
// ASYNCHRONOUS 

export const getMembers = pagination => ({
    type: 'GET_MEMBERS',
    pagination
})

// SYNCHRONOUS 

export const setMembers = pagination => ({
    type: 'SET_MEMBERS',
    pagination
})

