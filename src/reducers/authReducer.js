import { types } from "../types/types";


const algo = {
    uuid: 123456,
    name: 'Kenny catzin',
    dir: {
        a: 1,
        b: 2
    }
}

export const authReducer = (state = {}, action) => {
    switch (action.type) {
        case types.login:
            return {
                uid: action.payload.uid,
                name: action.payload.displayName
            }
        case types.login:
            return {}
    
        default:
            return state;
    }
}