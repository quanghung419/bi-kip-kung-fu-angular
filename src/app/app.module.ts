import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {DocumentsModule} from './documents/documents.module';
import {HomeModule} from './home/home.module';
import {PronunciationModule} from './pronunciation/pronunciation.module';
import {SearchModule} from './search/search.module';
import {AppRoutingModule} from './app-routing.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import {LayoutModule} from './layout/layout.module';
import {TinyCardModule} from './tiny-card/tiny-card.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    FlexLayoutModule,
    BrowserModule,
    LayoutModule,
    AppRoutingModule,
    DocumentsModule,
    HomeModule,
    PronunciationModule,
    SearchModule,
    TinyCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
