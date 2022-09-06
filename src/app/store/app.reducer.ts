import { ActionReducerMap } from '@ngrx/store';

import * as shoppingList from '../shopping-list/store/shopping-list.reducer';

export interface AppState {
  shoppingList: shoppingList.State
}
export const appReducer: ActionReducerMap<AppState> = {
  shoppingList: shoppingList.shoppingListReducer
}
