import { MenuStoreModel } from '../models/menu-store.model';
import { createSelector } from '@ngrx/store';


export const selectMenuState = state => <MenuStoreModel>state.menu.sidebar;

export const selectAllMenus = createSelector(
    selectMenuState,
    sidebar => sidebar.menus
);
