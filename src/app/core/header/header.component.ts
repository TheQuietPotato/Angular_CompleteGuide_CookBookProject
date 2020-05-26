import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core'
import { HttpService } from '../../shared/http.service';
import { RecipeService } from '../../recipes/recipe.service';
import { Recipe } from '../../recipes/recipe.model';
import { AuthService } from '../../auth/auth-service.service';

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html'
})

export class HeaderComponent implements OnInit {


  constructor(private httpService: HttpService, private recipesService: RecipeService, private authService: AuthService) { }

  ngOnInit() { }

  onSaveData() {
    this.httpService.storeRecipes().subscribe(
      (response: Response) => {
        console.log(response)
      }
    )
  }

  onFetchData() {
    this.httpService.getRecipes()
  }

}