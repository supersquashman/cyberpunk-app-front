import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  skillAttributes : Map<string,any[]>  = new Map<string,any[]>();
  skillAttrPoints : Map<string,number> = new Map<string, number>();
  skillLVLPoints: Map<string,number> = new Map<string, number>();
  skillBasePoints: Map<string,number> = new Map<string, number>();

  @Input() charStats!: Map<string,number>
  @Input() charSkillPoints!: Map<string,number>
  constructor() { }

  initializeSkillAttributesList():void{
    this.skillAttributes.set("Concentration",["will","awareness"]);
    this.skillAttributes.set("Conceal/Reveal Object",["int","awareness"]);
    this.skillAttributes.set("Lip Reading",["int","awareness"]);
  }

  initializeAttributePoints():void{
    for (let [statName,statVal] of this.skillAttributes){
      //skill attributes = {skill, [stat, category]}
      this.skillAttrPoints.set(statName,statVal[0]);
    }
  }

  initializeLevelPoints():void{
    for(let [skillName,skillPoints] of this.charSkillPoints){
      this.skillLVLPoints.set(skillName,skillPoints);
    }
  }

  calculateBasePoints():void{
    for(let skillName of this.skillAttributes.keys()){
      let baseValue = this.skillLVLPoints.get(skillName)!+this.skillAttrPoints.get(skillName)!;
      this.skillBasePoints.set(skillName,baseValue);
    }
  }

  ngOnInit(): void {
    this. initializeSkillAttributesList();
    this.initializeAttributePoints();
    this.initializeLevelPoints;



    this.calculateBasePoints();
  
  }
}
