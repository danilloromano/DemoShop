const INITIAL_STATE = {
    data: [],
    isFetching: false,
    error: false
}

const user = (state = INITIAL_STATE, action) => {
    if (action.type === 'LOAD_DATA_USER_REQUEST') {
        return {
            isFetching: true,
            data: [],
            error: false
        }
    }
    return state
}

export default user;