/**
 * Created by guanyj on  2018/9/1
 */
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import {UserComponent} from './user.component';
import {RouterModule} from '@angular/router';
import {ROUTER_CONFIG} from './user.routes';
import {UserListComponent} from './user-list/user-list.component';
import {CommonModule} from '@angular/common';
import {UserOnlineComponent} from './user-online/user-online.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        /** 导入 ng-zorro-antd 模块 **/
        NgZorroAntdModule,
        RouterModule.forChild(ROUTER_CONFIG)
    ],
    declarations: [
        UserComponent,
        UserListComponent,
        UserOnlineComponent
    ]
})

export class UserModule {}
