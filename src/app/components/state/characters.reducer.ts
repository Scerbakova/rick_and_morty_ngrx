import { createReducer, on } from '@ngrx/store';
import * as CharactersActions from './characters.actions';
import { CharacterApiRespone, Info } from 'src/app/interface/character';

export interface State {
  loading: boolean;
  characters: CharacterApiRespone["results"];
  error: string;
  info: Info | undefined
}

export const initialState: State = {
  loading: false,
  characters: [],
  error: '',
  info: undefined,
};

export const CharactersReducer = createReducer(
  initialState,
  on(CharactersActions.getCharacters, (state) => {
    return {
      ...state,
      loading: true
    };
  }),

  on(CharactersActions.loadCharactersSuccess, (state, { characters, info }) => {
    return {
      ...state,
      loading: false,
      characters: [...state.characters, ...characters],
      info: info
    };
  }),

  on(CharactersActions.loadCharactersError, (state, { error }) => {
    return {
      ...state,
      loading: false,
      error: error.message, characters: [],
    };
  })
);
