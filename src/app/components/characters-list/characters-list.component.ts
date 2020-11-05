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
  pageSize: number = 20;
  currentPage: number = 0;
  numberOfCharacters: number = 0;
  totalPage: number = 0;
  @Input() search: string = null;

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
    this.service.getCharacters(this.currentPage * this.pageSize).subscribe((data: any) => {
      this.characters = data.data.results;

      this.totalPage = data.data.total;
      console.log(this.totalPage);

      this.numberOfCharacters = data.data.offset + data.data.limit;
      console.log(this.numberOfCharacters);
      this.spinner.hide();
    }
    );
  }

  PreviousPage() {
    this.currentPage -= 1;
    this.getCharacters();
  }

  NextPage() {
    this.currentPage += 1;
    this.getCharacters();
  }
}
