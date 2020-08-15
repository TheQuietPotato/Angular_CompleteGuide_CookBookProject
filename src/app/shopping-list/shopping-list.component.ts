import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredient } from '../shared/ingredients.model';
import { ShoppingListService } from './shopping-list.service';
import { Subscription, Observable } from 'rxjs';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
  providers: []
})
export class ShoppingListComponent implements OnInit, OnDestroy {

  private subscription: Subscription;
  ingredients: Observable<{ingredients: Ingredient[]}>;

  constructor(private shoppingListService: ShoppingListService, private store: Store<{shoppingList: {ingredients: Ingredient[]}}>) {}


  ngOnInit() {
    this.ingredients = this.store.select('shoppingList');
    // this.ingredients = this.shoppingListService.getIngredients();
    // this.subscription = this.shoppingListService.ingredientsChanged.subscribe(
    //   (newIngredients) => {
    //     this.ingredients = newIngredients;
    //   }
    // )
    console.log(this.ingredients);
  }

  ngOnDestroy() {
    // this.subscription.unsubscribe();
  }

  onEditItem(i: number) {
    this.shoppingListService.startedEditing.next(
      i
    )
  }

}