/**
 * Created by guanyj on  2018/9/2
 */

import {Component} from '@angular/core';

@Component({
    selector: 'ws-user-list',
    templateUrl: './user-list.component.html'
})

export class UserListComponent {
    dataSet = [
        {
            key    : '1',
            name   : 'John Brown',
            age    : 32,
            address: 'New York No. 1 Lake Park'
        },
        {
            key    : '2',
            name   : 'Jim Green',
            age    : 42,
            address: 'London No. 1 Lake Park'
        },
        {
            key    : '3',
            name   : 'Joe Black',
            age    : 32,
            address: 'Sidney No. 1 Lake Park'
        }
    ];
}
