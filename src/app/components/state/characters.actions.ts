import { createAction, props } from "@ngrx/store";
import { CharacterApiRespone } from '../../interface/character';

export const getCharacters = createAction('[Characters List] load Characters');
export const loadCharactersSuccess = createAction('[Characters List] Load Characters Success', props<{characters: CharacterApiRespone[]}>());
export const loadCharactersError = createAction('[Characters List] Load Characters Error');