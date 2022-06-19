import { Actions, createEffect, ofType } from '@ngrx/effects';
import { RickAndMortyService } from 'src/app/service/rick-and-morty.service';
import { Injectable } from '@angular/core';
import { catchError, map, of, switchMap } from 'rxjs';
import { CharacterApiRespone } from 'src/app/interface/character';
import * as CharactersActions from './characters.actions';

@Injectable()
export class CharactersEffects {
  constructor(
    private actions$: Actions,
    private charactersService: RickAndMortyService
  ) { }
  
  getCharacters$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CharactersActions.getCharacters),
      switchMap(({ page }) => {
        return this.charactersService.getCharacters(page).pipe(
          map((characters: CharacterApiRespone ) => {
          return CharactersActions.loadCharactersSuccess({characters: characters.results, info: characters.info});
          }),
          catchError((error) => {
            return of(CharactersActions.loadCharactersError({error}))
          })
      )
    })
  ));
}