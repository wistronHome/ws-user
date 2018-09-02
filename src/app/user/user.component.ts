/**
 * Created by guanyj on  2018/9/1
 */
import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Router} from '@angular/router';

@Component({
    selector: 'ws-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.less'],
    encapsulation: ViewEncapsulation.Emulated
})

export class UserComponent implements OnInit {
    isCollapsed: boolean = false;

    constructor(
        private $router: Router
    ) {}

    ngOnInit() {

    }

    navigateTo(param: string) {
        this.$router.navigate([`/user/${param}`]).then();
    }
}
