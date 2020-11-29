import * as actionTypes from '../../../constants/action-types';

export const addEmail = (payload) => {
    return { type: actionTypes.ADD_EMAIL, payload}
};

export const addCompanyLoginEmail = (payload) => {
    return { type: actionTypes.ADD_COMPANY_LOGIN_EMAIL, payload}
};

export const addCompanyLoginPassword = (payload) => {
    return { type: actionTypes.ADD_COMPANY_LOGIN_PASSWORD, payload}
};

export const addPassword = (payload) => {
    return { type: actionTypes.ADD_PASSWORD, payload}
};

export const authSuccess = (payload) => {
    localStorage.setItem('token', payload);
    return { type: actionTypes.AUTH_SUCCESS, payload}
};

export const authFail = (payload) => {
    return { type: actionTypes.AUTH_FAIL, payload }
};

export const authCompanySuccess = (payload) => {
    localStorage.setItem('token', payload);
    return { type: actionTypes.AUTH_COMPANY_SUCCESS, payload}
};

export const authCompanyFail = (payload) => {
    return { type: actionTypes.AUTH_COMPANY_FAIL, payload }
};