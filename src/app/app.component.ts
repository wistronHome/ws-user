import {Component} from '@angular/core';

import {en_US, zh_CN, NzI18nService} from 'ng-zorro-antd';

@Component({
    selector: 'ws-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.less']
})
export class AppComponent {
    isZh: boolean = true;
    constructor(
        private $i18n: NzI18nService
    ) { }

    switchLanguage() {
        this.isZh = !this.isZh;
        this.$i18n.setLocale(this.isZh ? zh_CN : en_US);
    }
}
