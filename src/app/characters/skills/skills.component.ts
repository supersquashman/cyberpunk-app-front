import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  skillCategory : Map <string, string> = new Map<string, string>();
  skillAttributes : Map<string,string>  = new Map<string,string>();
  skillAttrPoints : Map<string,number> = new Map<string, number>();
  skillLVLPoints: Map<string,number> = new Map<string, number>();
  skillBasePoints: Map<string,number> = new Map<string, number>();

  @Input() charStats!: Map<string,number>
  @Input() charSkillPoints!: Map<string,number>
  constructor() { }

  initializeSkillAttributesList():void{
    this.skillAttributes.set("Concentration","will");
    this.skillAttributes.set("Conceal/Reveal Object","int");
    this.skillAttributes.set("Lip Reading","int");
    this.skillAttributes.set("Perception","int");
    this.skillAttributes.set("Tracking","int");
    this.skillAttributes.set("Athletics","dex");
    this.skillAttributes.set("Contortionist","dex");
    this.skillAttributes.set("Dance","dex");
    this.skillAttributes.set("Endurance","will");
    this.skillAttributes.set("Resist Torture/Drugs","will");
    this.skillAttributes.set("Stealth","dex");
    this.skillAttributes.set("Drive Land Vehicle","ref");
    this.skillAttributes.set("Pilot Air Vehicle","ref");
    this.skillAttributes.set("Pilot Sea Vehicle","ref");
    this.skillAttributes.set("Riding","ref");
    this.skillAttributes.set("Accounting","int");
    this.skillAttributes.set("Animal Handling","int");
    this.skillAttributes.set("Bureaucracy","int");
    this.skillAttributes.set("Business","int");
    this.skillAttributes.set("Composition","int");
    this.skillAttributes.set("Criminology","int");
    this.skillAttributes.set("Cryptography","int");
    this.skillAttributes.set("Deduction","int");
    this.skillAttributes.set("Education","int");
    this.skillAttributes.set("Gamble","int");
    this.skillAttributes.set("language","int");
    this.skillAttributes.set("Library Search","int");
    this.skillAttributes.set("Local Expert","int");
    this.skillAttributes.set("Science","int");
    this.skillAttributes.set("Tactics","int");
    this.skillAttributes.set("Wilderness Survival","int");
    this.skillAttributes.set("Brawling","dex");
    this.skillAttributes.set("Evasion","dex");
    this.skillAttributes.set("Martial Arts","dex");
    this.skillAttributes.set("Melee Weapon","dex");
    this.skillAttributes.set("Acting","cool");
    this.skillAttributes.set("Play Instrument","tech");
    this.skillAttributes.set("Archery","ref");
    this.skillAttributes.set("Autofire","ref");
    this.skillAttributes.set("Handgun","ref");
    this.skillAttributes.set("Heavy Weapons","ref");
    this.skillAttributes.set("Shoulder Arms","ref");
    this.skillAttributes.set("Bribery","cool");
    this.skillAttributes.set("Conversation","emp");
    this.skillAttributes.set("Human Perception","emp");
    this.skillAttributes.set("Interrogation","cool");
    this.skillAttributes.set("Persuasion","cool");
    this.skillAttributes.set("Personal Grooming","cool");
    this.skillAttributes.set("Streetwise","cool");
    this.skillAttributes.set("Trading","cool");
    this.skillAttributes.set("Wardrobe & Style","cool");
    this.skillAttributes.set("Air Vehicle Tech","tech");
    this.skillAttributes.set("Basic Tech","tech");
    this.skillAttributes.set("Cybertech","tech");
    this.skillAttributes.set("Demolitions","tech");
    this.skillAttributes.set("Electronics/Security Tech","tech");
    this.skillAttributes.set("First Aid","tech");
    this.skillAttributes.set("Forgery","tech");
    this.skillAttributes.set("Land Vehicle Tech","tech");
    this.skillAttributes.set("Paint/Draw/Scupt","tech");
    this.skillAttributes.set("Paramedic","tech");
    this.skillAttributes.set("Photography/Film","tech");
    this.skillAttributes.set("Pick Lock","tech");
    this.skillAttributes.set("Pick Pocket","tech");
    this.skillAttributes.set("Sea Vehicle Tech","tech");
    this.skillAttributes.set("Weaponstech","tech");
  }

  initializeAttributePoints():void{
    for (let [statName,statVal] of this.skillAttributes){
      //skill attributes = {skill, [stat, category]}
      this.skillAttrPoints.set(statName,this.charStats.get(statVal)!);
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
    console.log(this.skillAttributes);



    this.calculateBasePoints();
  
  }
}
