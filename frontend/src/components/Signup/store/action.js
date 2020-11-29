import * as actionTypes from '../../../constants/action-types';

export const addCompanyName = (payload) => {
    return { type: actionTypes.ADD_COMPANY_NAME, payload}
};

export const addCompanyEmail = (payload) => {
    return { type: actionTypes.ADD_COMPANY_EMAIL, payload}
};

export const addCompanyPassword = (payload) => {
    return { type: actionTypes.ADD_COMPANY_PASSWORD, payload}
};

export const addCity = (payload) => {
    return { type: actionTypes.ADD_CITY, payload}
};

export const addState = (payload) => {
    return { type: actionTypes.ADD_STATE, payload}
};

export const addCountry = (payload) => {
    return { type: actionTypes.ADD_COUNTRY, payload}
};

export const setCompanyError = (payload) => {
    return { type: actionTypes.SET_COMPANY_ERROR, payload }
};

export const addFirstName = (payload) => {
    return { type: actionTypes.ADD_FIRST_NAME, payload}
};

export const addLastName = (payload) => {
    return { type: actionTypes.ADD_LAST_NAME, payload}
};

export const addSignupEmail = (payload) => {
    return { type: actionTypes.ADD_SIGNUP_EMAIL, payload}
};

export const addSignupPassword = (payload) => {
    return { type: actionTypes.ADD_SIGNUP_PASSWORD, payload}
};

export const addCollegeName = (payload) => {
    return { type: actionTypes.ADD_COLLEGE_NAME, payload}
};

export const setSignupError = (payload) => {
    return { type: actionTypes.SET_SIGNUP_ERROR, payload }
};
