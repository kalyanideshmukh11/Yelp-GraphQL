import * as actionTypes from '../../../constants/action-types';

const initialState = {
    first_name: "",
    last_name: "",
    email_id: "",
    password: "",
    college_name: "",
    company_name: "",
    email: "",
    company_password: "",
    city: "",
    state: "",
    country: "",
    error: null,
    company_error: null
}

const signupReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_COMPANY_EMAIL:
            return {
                ...state,
                email: action.payload,
            }
        case actionTypes.ADD_COMPANY_PASSWORD:
            return {
                ...state,
                company_password: action.payload,
            }
        case actionTypes.ADD_COMPANY_NAME:
            return {
                ...state,
                company_name: action.payload,
            }
        case actionTypes.ADD_CITY:
            return {
                ...state,
                city: action.payload,
            }
        case actionTypes.ADD_COUNTRY:
            return {
                ...state,
                country: action.payload,
            }
        case actionTypes.ADD_STATE:
            return {
                ...state,
                state: action.payload,
            }
        case actionTypes.SET_COMPANY_ERROR:
            return {
                ...state,
                company_error: action.payload,
            }
        case actionTypes.ADD_EMAIL:
            return {
                ...state,
                email_id: action.payload,
            }
        case actionTypes.ADD_PASSWORD:
            return {
                ...state,
                password: action.payload,
            }
        case actionTypes.ADD_FIRST_NAME:
            return {
                ...state,
                first_name: action.payload,
            }
        case actionTypes.ADD_LAST_NAME:
            return {
                ...state,
                last_name: action.payload,
            }
        case actionTypes.ADD_COLLEGE_NAME:
            return {
                ...state,
                college_name: action.payload,
            }
        case actionTypes.SET_SIGNUP_ERROR:
            return {
                ...state,
                error: action.payload,
            }
        default:
            return initialState;
    }
}

export default signupReducer;