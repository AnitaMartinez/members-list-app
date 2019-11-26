
const initialState = {
    members: [],
    pagination: {
        currentPage: 1,
        itemsPerPage: 6,
        pages: null
    },
    loading: true,
    error: false
}

const members = (state = initialState, action) => {
    switch(action.type) {
        case 'SET_MEMBERS': 
            return {
                ...state,
                members: action.members,
                pagination: {
                    ...state.pagination, 
                    currentPage: action.pagination.page, 
                    pages: action.pagination.pages
                }
            }
        case 'SHOW_GLOBAL_LOADING': 
            return {
                ...state,
                loading: true
            }
        case 'HIDE_GLOBAL_LOADING': 
            return {
                ...state,
                loading: false
            }
        case 'SHOW_GLOBAL_ERROR': 
            return {
                ...state,
                loading: true
            }
        case 'HIDE_GLOBAL_ERROR': 
            return {
                ...state,
                loading: false
            }
        default: 
            return state
        }
}

export default members
