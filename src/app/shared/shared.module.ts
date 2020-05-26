import { NgModule } from '@angular/core';
import { DropdownDirective } from './dropdown.directive';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app.router';

@NgModule({
    declarations: [
        DropdownDirective
    ],
    exports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        DropdownDirective
    ],
})
export class SharedModule {

}