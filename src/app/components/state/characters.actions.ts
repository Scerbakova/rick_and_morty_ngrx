import { HttpErrorResponse } from '@angular/common/http';
import { createAction, props } from '@ngrx/store';
import { CharacterApiRespone, Info } from '../../interface/character';

export const getCharacters = createAction(
  '[Characters List] load Characters',
  props<{page: number}>()
);

export const loadCharactersSuccess = createAction(
  '[Characters List] Load Characters Success',
  props<{ characters: CharacterApiRespone["results"], info: Info }>()
);

export const loadCharactersError = createAction(
  '[Characters List] Load Characters Error',
  props<{ error: HttpErrorResponse }>()
);
