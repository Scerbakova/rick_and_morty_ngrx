import { createSelector, createFeatureSelector } from '@ngrx/store';
import { State } from './characters.reducer';

export const selectCharacters = createFeatureSelector<State>('characters');

export const selectAllCharacters = createSelector(selectCharacters, ({ characters }) => characters);

export const selectLoading = createSelector(
  selectCharacters,
  ({ loading }) => loading
);

export const selectError = createSelector(
  selectCharacters,
  ({ error }) => error
);

export const selectInfo = createSelector(
  selectCharacters,
  ({ info }) => info
);
