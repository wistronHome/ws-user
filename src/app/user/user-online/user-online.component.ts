/**
 * Created by guanyj on  2018/9/2
 */

import {Component} from '@angular/core';

@Component({
    selector: 'ws-user-online',
    templateUrl: './user-online.component.html'
})

export class UserOnlineComponent {
    dataSet = [
        {
            key    : '1',
            name   : '张三',
            age    : 32,
            address: 'New York No. 1 Lake Park'
        },
        {
            key    : '2',
            name   : '李四',
            age    : 42,
            address: 'London No. 1 Lake Park'
        },
        {
            key    : '3',
            name   : '王五',
            age    : 32,
            address: 'Sidney No. 1 Lake Park'
        }
    ];

    constructor() { }
}
