import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-character-main',
  templateUrl: './character-main.component.html',
  styleUrls: ['./character-main.component.scss']
})
export class CharacterMainComponent implements OnInit {

  charName="Varna"
  stats={int:0,ref:0,dex:0,tech:0,cool:0,will:0,luck:0,move:0,body:0,emp:0}
  equipment={}
  skillAttributes={}
  skillPoints={}
  background=""

  constructor() { }


  ngOnInit(): void {
  }

}
