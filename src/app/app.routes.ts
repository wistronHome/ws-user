/**
 * Created by guanyj on  2018/9/1
 */
import {Routes} from '@angular/router';

export const ROUTER_CONFIG: Routes = [
    {path: '', pathMatch: 'full', redirectTo: '/user-manage'},
    {path: 'user-manage', loadChildren: './user/user.module#UserModule'}
];
