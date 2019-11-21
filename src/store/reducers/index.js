
const initialState = {
    members: []
}

const members = (state = initialState, action) => {
    switch(action.type) {
        case 'SET_MEMBERS': 
            return {
                ...state,
                members: action.members
            }
        default: 
            return state
        }
}

export default members
