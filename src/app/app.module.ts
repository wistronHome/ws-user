import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppComponent} from './app.component';

/** 配置 angular i18n **/
import {registerLocaleData} from '@angular/common';
import zh from '@angular/common/locales/zh';
registerLocaleData(zh);

/** 配置 ng-zorro-antd 国际化 **/
import {NZ_I18N, zh_CN, NgZorroAntdModule} from 'ng-zorro-antd';
import {RouterModule} from '@angular/router';
import {ROUTER_CONFIG} from './app.routes';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        BrowserAnimationsModule,
        /** 导入 ng-zorro-antd 模块 **/
        NgZorroAntdModule,
        RouterModule.forRoot(ROUTER_CONFIG)
    ],
    declarations: [
        AppComponent
    ],
    providers: [
        /** 配置 ng-zorro-antd 国际化 **/
        {provide: NZ_I18N, useValue: zh_CN}
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
