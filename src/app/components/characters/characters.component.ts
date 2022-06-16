import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { Character, Info } from 'src/app/interface/character';
import { RickAndMortyService } from 'src/app/service/rick-and-morty.service';
import { take } from 'rxjs/operators';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss'],
})
export class CharactersComponent implements OnInit {
  characters: Character[] = [];
  info: Info | undefined

  showButton = false;
  private page = 1;
  private hideScrollHeight = 200;
  private showScrollHeight = 500;

  constructor(
    private characterService: RickAndMortyService,
    @Inject(DOCUMENT) private document: Document
  ) {}

  ngOnInit(): void {
    this.getCharactersFromService();
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

  onScrollDown(): void {
    if (this.info?.next) {
      this.page++;
      this.getCharactersFromService();
    }
  }

  onScrollTop(): void {
    this.document.documentElement.scrollTop = 0;
  }

  private getCharactersFromService(): void {
    this.characterService
      .getCharacters(this.page)
      .pipe(take(1))
      .subscribe((res) => {
        if (res?.results?.length) {
          const { info, results } = res;
          this.characters = [...this.characters, ...results];
          this.info = info;
        } else {
          this.characters = [];
        }
      });
  }
}
