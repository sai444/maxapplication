import { Component, ViewEncapsulation, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { AddapptableState } from 'src/app/reducers';
import { LoadMenus } from './actions/menu.actions';
import { selectAllMenus } from './selectors/menu.selector';
import { MenuModel } from '@addapptables/menu';
import { MenuHeaderModel } from '@addapptables/menu';
import { MenuUserModel } from '@addapptables/menu';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuComponent implements OnInit {

    menus$: Observable<MenuModel[]>;

    header: MenuHeaderModel = {
        companyName: 'FutureConnect',
        logoUrl: 'assets/images/logo/addaptables.svg'
    };

   Username = localStorage.getItem('Username')
   UserRole = localStorage.getItem('UserRole')
    user: MenuUserModel = {
        initialName: 'MG',
        fullName:  this.Username,
        email: this.UserRole,
        avatarUrl: 'assets/images/avatars/Velazquez.jpg'
    };

    constructor(private readonly _store: Store<AddapptableState>) {
        _store.dispatch(new LoadMenus());
    }

    ngOnInit() {

      console.log( 'username in admin', this.Username );

        this.menus$ = this._store.pipe(
            select(selectAllMenus)
        );
    }
}
