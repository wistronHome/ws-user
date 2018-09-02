/**
 * Created by guanyj on  2018/9/2
 */
import {Routes} from '@angular/router';
import {UserComponent} from './user.component';
import {UserListComponent} from './user-list/user-list.component';
import {UserOnlineComponent} from './user-online/user-online.component';

export const ROUTER_CONFIG: Routes = [
    {
        path: '',
        component: UserComponent,
        children: [
            {path: 'list', component: UserListComponent},
            {path: 'online', component: UserOnlineComponent}
        ]
    },
];
