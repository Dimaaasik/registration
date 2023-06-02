const  SET_USER = "SET_USER"

const defaultState = {
    currentUser: {},
    isAuth: false
}

export default function userReducer(state = defaultState, action){
    switch (action.type){
        case SET_USER:
            // console.log(action.payload.email)
            return {
                ...state,
                currentUser: action.payload,
                isAuth: true,
                email: action.payload.email
            }
        default:
            return state
    }
}

export const setUser = user => ({type: SET_USER, payload: user})