import {types} from './../types/types'
// export const login = (uuid, displayName) => {
//     return {
//         type: types.login,
//         payload: {
//             uuid: uuid,
//             displayName: displayName
//         }
//     }
// }
export const login = (uid, displayName) => ({
        type: types.login,
        payload: {
            uid: uid,
            displayName: displayName
        }
    });
    
