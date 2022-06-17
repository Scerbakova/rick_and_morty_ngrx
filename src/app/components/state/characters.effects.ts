import { Actions, createEffect, ofType } from '@ngrx/effects';
import { RickAndMortyService } from 'src/app/service/rick-and-morty.service';
import { Injectable } from '@angular/core';
import { getCharacters } from './characters.actions';

@Injectable()
export class CharactersEffects {
  getCharacters$ = createEffect(() =>
    this.actions$.pipe(ofType(getCharacters)
  );

  constructor(
    private actions$: Actions,
    private rickAndMortyService: RickAndMortyService
  ) {}
}


// this.characterService
// .getCharacters(this.page)
// .pipe(take(1))
// .subscribe((res) => {
//   if (res?.results?.length) {
//     const { info, results } = res;
//     this.characters = [...this.characters, ...results];
//     this.info = info;
//   } else {
//     this.characters = [];
//   }
// });