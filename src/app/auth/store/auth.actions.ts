import { Action } from '@ngrx/store';


export const LOGIN_START = '[auth] login start';
export const AUTHENTICATE_FAIL = '[auth] login fail';
export const AUTHENTICATE_SUCCESS = '[auth] login';
export const LOGOUT = '[auth] logout';
export const CLEAR_ERROR = '[auth] clear error';
export const AUTO_LOGIN = '[auth] auto login';
export const SIGNUP_START= '[auth] signup start';

export class AutheticateSuccess implements Action {
  readonly type = AUTHENTICATE_SUCCESS;
  constructor(public payload: {
    email: string,
    userId: string,
    token: string,
    expirationDate: Date
  }) {}
}
export class Logout implements Action {
  readonly type = LOGOUT;
}
export class LoginStart implements Action {
  readonly type = LOGIN_START;
  constructor(public payload: { email: string, password: string }) {}
}
export class AuthenticateFail implements Action {
  readonly type = AUTHENTICATE_FAIL;
  constructor(public payload: string) { }
}
export class SignupStart implements Action {
  readonly type = SIGNUP_START;
  constructor(public payload: { email: string, password: string }) {}
}
export class ClearError implements Action {
  readonly type = CLEAR_ERROR;
}
export class AutoLogin implements Action {
  readonly type = AUTO_LOGIN;
}
export type AuthActions = AutheticateSuccess | Logout | LoginStart | AuthenticateFail | SignupStart | ClearError | AutoLogin;
