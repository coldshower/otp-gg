import * as Consts from '../constants/auth';

export const requestLogin = loginInfo => ({type: Consts.REQUEST_LOGIN, loginInfo });
export const loginSuccess = () => ({type: Consts.LOGIN_SUCCESS});
export const loginFailed = error => ({type: Consts.LOGIN_FAILED, error });

export const requestSignUp = signUpInfo => ({type: Consts.REQUEST_SIGN_UP, signUpInfo});
export const SignUpSuccess = () => ({type: Consts.SIGN_UP_SUCCESS });
export const SignUpFailed = error => ({type: Consts.SIGN_UP_FAILED, error });
