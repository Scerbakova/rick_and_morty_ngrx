import { createReducer, on } from "@ngrx/store";
import { loadCharactersSuccess } from "./characters.actions";
import { CharacterApiRespone } from "src/app/interface/character";

export interface charactersState {
  [id: number]: CharacterApiRespone;
}

const initialState: charactersState = [];

export const CharactersReducer = createReducer(initialState, on(loadCharactersSuccess, (state, {characters}) => {
  return {
    ...state,
    initialState: characters
  };
})
);