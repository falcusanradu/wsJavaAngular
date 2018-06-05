import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./components/header/header.component";
import { HomeComponent } from "./pages/home/home.component";
import { FooterComponent } from "./components/footer/footer.component";
import { LogInComponent } from "./pages/log-in/log-in.component";
import { FormsModule } from "@angular/forms";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { BackendService } from "./services/backend.service";
import { HttpModule, Http } from "@angular/http";
import { TranslateModule, TranslateLoader } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { Translate } from "./translate.service";
import { NgxPaginationModule } from "ngx-pagination";
import {WebSocketService} from './services/websocket.service';

export function createTranslateLoader(http_: HttpClient) {
  return new TranslateHttpLoader(http_, "assets/i18n/", ".json");
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    LogInComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HttpModule,
    NgxPaginationModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [Http]
      }
    })
  ],
  providers: [
    BackendService,
    LogInComponent,
    Translate,
    WebSocketService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
