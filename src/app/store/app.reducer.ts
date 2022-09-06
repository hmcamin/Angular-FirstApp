import { ActionReducerMap } from '@ngrx/store';
import * as auth from '../auth/store/auth.reducer';

import * as shoppingList from '../shopping-list/store/shopping-list.reducer';

export interface AppState {
  shoppingList: shoppingList.State,
  auth: auth.State
}
export const appReducer: ActionReducerMap<AppState> = {
  shoppingList: shoppingList.shoppingListReducer,
  auth: auth.authReducer
}
