import * as actionTypes from '../../../constants/action-types';

const initialState = {
    email: null,
    company_email: null,
    password: null,
    company_password: null,
    token: null,
    error: null
}

const loginReducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.ADD_EMAIL:
            return {
                ...state,
                email: action.payload,
                error: null
            }
        case actionTypes.ADD_COMPANY_LOGIN_EMAIL:
            return {
                ...state,
                company_email: action.payload,
                error: null
            }
        case actionTypes.ADD_PASSWORD:
            return {
                ...state,
                password: action.payload,
                error: null
            }
        case actionTypes.ADD_COMPANY_LOGIN_PASSWORD:
            return {
                ...state,
                company_password: action.payload,
                error: null
            }
        case actionTypes.AUTH_SUCCESS:
            return {
                ...state,
                token: action.payload,
                error: null
            }
        case actionTypes.AUTH_COMPANY_SUCCESS:
            return {
                ...state,
                token: action.payload,
                error: null
            }
        case actionTypes.AUTH_FAIL:
            return {
                ...state,
                error: action.payload
            }
        case actionTypes.AUTH_COMPANY_FAIL:
            return {
                ...state,
                error: action.payload
            }
        default:
            return initialState;
    }
}

export default loginReducer;