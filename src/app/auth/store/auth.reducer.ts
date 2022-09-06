import { Action } from '@ngrx/store';
import { User } from '../user.model';
import * as authActions from './auth.actions';

export interface State {
  user: User
}
export const initaialState: State = {
  user: null
}

export function authReducer(state, action: authActions.AuthActions) {
  switch (action.type) {
    case authActions.LOGIN:
      return {
        ...state,
        user: new User(action.payload.email, action.payload.userId, action.payload.token, action.payload.expirationDate)

      }
    case authActions.LOGOUT:
      return {
        ...state,
        user: null
      }
    default:
      return {
        ...state
      }

  }
}
