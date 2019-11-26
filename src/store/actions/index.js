
// ASYNCHRONOUS 

export const getMembers = ({pagination, withLoaders}) => ({
    type: 'GET_MEMBERS',
    pagination,
    withLoaders
})

// SYNCHRONOUS 

export const setMembers = pagination => ({
    type: 'SET_MEMBERS',
    pagination
})

export const showGlobalLoading = () => ({
    type: 'SHOW_GLOBAL_LOADING',
})

export const hideGlobalLoading = () => ({
    type: 'HIDE_GLOBAL_LOADING',
})

export const showGlobalError = () => ({
    type: 'SHOW_GLOBAL_ERROR',
})

export const hideGlobalError = () => ({
    type: 'HIDE_GLOBAL_ERROR',
})
