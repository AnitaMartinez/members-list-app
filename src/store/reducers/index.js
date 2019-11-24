
const initialState = {
    members: [],
    pagination: {
        currentPage: 1,
        itemsPerPage: 6,
        pages: null
    }
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
        default: 
            return state
        }
}

export default members
