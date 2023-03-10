import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BannerComponent } from './components/banner/banner.component';
import { SliderComponent } from './components/slider/slider.component';
import { TableCcurrencyComponent } from './components/table-ccurrency/table-ccurrency.component';
import { CardTradeComponent } from './components/card-trade/card-trade.component';
import { CardMobileComponent } from './components/card-mobile/card-mobile.component';
import { GridTokensComponent } from './components/grid-tokens/grid-tokens.component';
import { CardPossibilityComponent } from './components/card-possibility/card-possibility.component';
import { GridQrOsComponent } from './components/grid-qr-os/grid-qr-os.component';
import { JoinUsComponent } from './components/join-us/join-us.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BannerComponent,
    SliderComponent,
    TableCcurrencyComponent,
    CardTradeComponent,
    CardMobileComponent,
    GridTokensComponent,
    CardPossibilityComponent,
    GridQrOsComponent,
    JoinUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
