import { Component, OnInit, ViewChild, Output, EventEmitter, ElementRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Ingredient } from 'src/app/shared/ingredients.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @Output() itemsToAddEvent = new EventEmitter<Ingredient>();
  @ViewChild('nameInput')  nameInput: ElementRef;
  @ViewChild('amountInput') amountInput: ElementRef;

  // myForm: FormGroup;
  constructor() { }

  ngOnInit() {
  }

  addToList() {
    const newIngre = new Ingredient(this.nameInput.nativeElement.value,
                                    this.amountInput.nativeElement.value)
    this.itemsToAddEvent.emit(newIngre)
  }
}
