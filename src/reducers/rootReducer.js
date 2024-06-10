const initialState = {
    users: [],
    isUsersLoaded: false,
}

const rootReducer = (state = initialState, action) => {
    console.log(action)
    switch (action.type) {
        case 'DELETE_CARD':
            let newUsers = state.users.filter((user) => {
                return action.id !== user.username
            });
            return {
                ...state,
                users: newUsers,
            }

        case 'FETCH_USERS':
            return {
                ...state,
                users: action.payload,
                isUsersLoaded: true,
            }


        default:
            return state;
    }
}

export default rootReducer;