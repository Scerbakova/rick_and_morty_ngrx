import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import { AppComponent } from './app.component';
import { CharactersComponent } from './components/characters/characters.component';
import { CharactersReducer } from './components/state/characters.reducer';
import { EffectsModule } from '@ngrx/effects';
import { CharactersEffects } from './components/state/characters.effects';

@NgModule({
  declarations: [AppComponent, CharactersComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    InfiniteScrollModule,
    StoreModule.forRoot({ characters: CharactersReducer }),
    EffectsModule.forRoot([CharactersEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
