import { Component, Input, OnInit } from '@angular/core';
import { CharacterService } from 'src/app/services/character.service';

@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.css']
})
export class CharactersListComponent implements OnInit {
  characters: any = null;

  constructor(private service: CharacterService,) { }

  ngOnInit(): void {
    this.service.getCharacters().subscribe((data: any) => {
      console.log(data);
      this.characters = data.data.results
    }

    );
  }

  formatURL(character: any) {
    var url = `${character.thumbnail.path}/landscape_medium.${character.thumbnail.extension}`;
    console.log(url);
    return url;
  }

}
