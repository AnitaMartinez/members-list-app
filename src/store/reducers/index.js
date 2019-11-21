
const initialState = {
    members: [],
    pages: null
}

const members = (state = initialState, action) => {
    switch(action.type) {
        case 'SET_MEMBERS': 
            return {
                ...state,
                members: action.members,
                pages: action.pages
            }
        default: 
            return state
        }
}

export default members
