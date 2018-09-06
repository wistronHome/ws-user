import {Component} from '@angular/core';

import {en_US, zh_CN, NzI18nService} from 'ng-zorro-antd';

@Component({
    selector: 'ws-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.less']
})
export class AppComponent {
    isZh: boolean = true;
    menuConfig: any;
    constructor(
        private $i18n: NzI18nService
    ) {
        this.menuConfig = [
            {text: '概览', module: 'portal'},
            {text: '用户管理', module: 'user-manage',
                children: [
                    {text: '用户列表', url: 'list'},
                    {text: '在线用户', url: 'online'}
                ]
            }
        ];
    }

    switchLanguage() {
        this.isZh = !this.isZh;
        this.$i18n.setLocale(this.isZh ? zh_CN : en_US);
    }

    navigation(url: string) {
        window.open(url);
    }
}
