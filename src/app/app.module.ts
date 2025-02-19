import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CharacterMainComponent } from './characters/character-main/character-main.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { SkillsComponent } from './characters/skills/skills.component';
import { WeaponsComponent } from './characters/equipment/weapons/weapons.component';
import { ItemsComponent } from './characters/equipment/items/items.component';
import { ArmorComponent } from './characters/equipment/armor/armor.component';

@NgModule({
  declarations: [
    AppComponent,
    CharacterMainComponent,
    SkillsComponent,
    WeaponsComponent,
    ItemsComponent,
    ArmorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
