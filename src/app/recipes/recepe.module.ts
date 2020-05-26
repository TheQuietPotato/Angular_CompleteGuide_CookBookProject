import { NgModule } from '@angular/core';

import { RecipesComponent } from './recipes.component';
import { RecipesEditComponent } from './recipes-edit/recipes-edit.component';
import { RecipeStartComponent } from './recipe-start/recipe-start.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipe-list/recipe-item/recipe-item.component';
import { RecipesRoutingModule } from './recipes-routing.module';
import { SharedModule } from '../shared/shared.module';
import { AuthGuard } from '../auth/auth-guard.service';

@NgModule({
  declarations: [
    RecipesComponent,
    RecipesEditComponent,
    RecipeStartComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
  ],
  imports: [
    SharedModule,
    RecipesRoutingModule
  ],
  providers: [AuthGuard]
})
export class RecipesModule {

}