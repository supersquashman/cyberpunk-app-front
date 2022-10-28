import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-character-main',
  templateUrl: './character-main.component.html',
  styleUrls: ['./character-main.component.scss']
})
export class CharacterMainComponent implements OnInit {

  charName="Varna"
  stats=new Map<string,number>([["int",3],["ref",0],["dex",0],["tech",0],["cool",0],["will",0],["luck",0],["move",0],["body",0],["emp",0]]);
  equipment={}
  skillAttributes={}
  skillPoints=new Map<string, number>([["Concentration",8], ["Conceal/Reveal Object",2],["Lip Reading",9]]);
  background=""

  constructor() { }


  ngOnInit(): void {
  }

}
