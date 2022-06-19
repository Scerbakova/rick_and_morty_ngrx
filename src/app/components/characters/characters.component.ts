import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { Character, Info } from 'src/app/interface/character';
import { DOCUMENT } from '@angular/common';
import { Store } from '@ngrx/store';
import * as CharacterSelector from '../state/characters.selectors'
import * as CharactersActions from '../state/characters.actions'

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss'],
})

export class CharactersComponent implements OnInit {
  characters: Character[] = [];
  info: Info | undefined

  characters$ = this.store.select(CharacterSelector.selectAllCharacters);
  loading$ = this.store.select(CharacterSelector.selectLoading);
  error$ = this.store.select(CharacterSelector.selectError);
  info$ = this.store.select(CharacterSelector.selectInfo);

  showButton = false;

  private page = 1;
  private hideScrollHeight = 200;
  private showScrollHeight = 500;

  constructor(
    private store: Store,
    @Inject(DOCUMENT) private document: Document
  ) { }

  ngOnInit(): void {
    this.store.dispatch(CharactersActions.getCharacters({ page: this.page }));
  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    const yOffSet = window.pageYOffset;

    if (
      (yOffSet ||
        this.document.documentElement.scrollTop ||
        this.document.body.scrollTop) > this.showScrollHeight
    ) {
      this.showButton = true;
    } else if (
      this.showButton &&
      (yOffSet ||
        this.document.documentElement.scrollTop ||
        this.document.body.scrollTop) < this.hideScrollHeight
    ) {
      this.showButton = false;
    }
  }

  onScrollDown(infoNext: string): void {
    if (infoNext) {
      this.page++;
      this.store.dispatch(CharactersActions.getCharacters({ page: this.page }))
    }
  }

  onScrollTop(): void {
    this.document.documentElement.scrollTop = 0;
  }
}


