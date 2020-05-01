import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredient } from '../shared/ingredients.model';
import { ShoppingListService } from './shopping-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
  providers: []
})
export class ShoppingListComponent implements OnInit, OnDestroy {

  private subscription: Subscription
  ingredients: Ingredient[];

  constructor(private shoppingListService: ShoppingListService, ) {}


  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredients();
    this.subscription = this.shoppingListService.ingredentsChanged.subscribe(
      (newIngredients) => {
        this.ingredients = newIngredients;
      }
    )
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}