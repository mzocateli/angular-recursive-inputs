import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TokenFormComponent } from './token-form/token-form.component';
import { TreeFormComponent } from './tree-form/tree-form.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [TokenFormComponent, TreeFormComponent],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule
  ],
  exports: [
    TokenFormComponent,
    TreeFormComponent
  ]
})
export class PortalModule { }
