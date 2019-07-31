import { REGISTER, REGISTER_SUCCESS, REGISTER_FAILURE, EDIT_PROFILE, EDIT_PROFILE_SUCCESS, EDIT_PROFILE_FAILURE } from "../actiontypes/actiontypes";

export function register(payload){
    return { type: REGISTER,payload}
}
export function registersuccess(user){
    return { type: REGISTER_SUCCESS,user}
}
export function registerfailure(error){
    return { type: REGISTER_FAILURE, error}
}



//edit profile action creators

export function editprofile(payload){
    return { type: EDIT_PROFILE, payload}
}
export function editprofilesuccess(user){
    return { type: EDIT_PROFILE_SUCCESS,user}
}
export function editprofilefailure(error){
    return { type: EDIT_PROFILE_FAILURE, error }
}