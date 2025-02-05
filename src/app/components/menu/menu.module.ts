import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from 'src/app/components/menu/side-bar/side-bar.component';
import {
  MatAccordion, MatExpansionModule
} from '@angular/material/expansion';
import { MatIcon } from '@angular/material/icon';



@NgModule({
  declarations: [SideBarComponent],
  imports: [
    CommonModule,
    MatAccordion,
    MatIcon,
    MatExpansionModule
  ],
  exports: [SideBarComponent]
})
export class MenuModule { }
