import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {
  contador: number = 0;

  constructor() { }

  ngOnInit(): void {
  }


  search() {
    this.contador += 1;
  }
}
