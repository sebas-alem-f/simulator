import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { SimulatorComponent } from './simulator/simulator.component';
import {
  NzAlertModule,
  NzCardModule, NzDescriptionsModule, NzDividerModule, NzFormModule,
  NzGridModule,
  NzIconModule, NzInputModule, NzInputNumberModule,
  NzLayoutModule, NzResultModule,
  NzSliderModule,
  NzStatisticModule,
  NzTabsModule, NzTagModule,
  NzTypographyModule
} from 'ng-zorro-antd';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    SimulatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzLayoutModule,
    NzGridModule,
    NzTabsModule,
    NzCardModule,
    NzIconModule,
    NzTypographyModule,
    NzSliderModule,
    NzStatisticModule,
    NzDescriptionsModule,
    NzResultModule,
    NzAlertModule,
    NzDividerModule,
    NzFormModule,
    NzInputModule,
    NzInputNumberModule,
    NzTagModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
