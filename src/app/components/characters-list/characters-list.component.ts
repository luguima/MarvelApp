import { Component, Input, OnInit } from '@angular/core';
import { CharacterService } from 'src/app/services/character.service';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.css']
})
export class CharactersListComponent implements OnInit {
  characters: any = null;
  currentPage: number = 1;
  totalItems: number = 0;

  constructor(private service: CharacterService, private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.getCharacters();
  }

  formatURL(character: any) {
    return `${character.thumbnail.path}/landscape_medium.${character.thumbnail.extension}`;
  }

  getCharacters() {
    console.log("teste");
    this.spinner.show();
    this.service.getCharacters((this.currentPage * 20) - 20).subscribe((data: any) => {
      this.characters = data.data.results;
      this.totalItems = data.data.total;
      this.spinner.hide();
    }
    );
  }

  pageChanged(event) {
    console.log("teste " + event);
    console.log("teste " + this.currentPage);
    this.currentPage = event;
    this.getCharacters();
  }
}
