import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Input() recipeItem: Recipe;
  @Input() recipeItemIndex: number;

  constructor(private router: Router, private aRoute: ActivatedRoute) { }

  ngOnInit() {
  }

}
