import { NgModule } from "@angular/core"
import { Routes, RouterModule } from '@angular/router'
import { ShoppingListComponent } from './shopping-list/shopping-list.component'
import { RecipesComponent } from './recipes/recipes.component'
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component'
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component'
import { RecipesEditComponent } from './recipes/recipes-edit/recipes-edit.component'

const ROUTES: Routes = [
    { path: '', redirectTo: '/recipes', pathMatch: 'full'},
    { path: 'recipes', component: RecipesComponent, children:[
        { path: '', component: RecipeStartComponent },
        { path: 'new', component: RecipesEditComponent },
        { path: ':id', component: RecipeDetailComponent },
        { path: ':id/edit', component: RecipesEditComponent }
    ]},
    { path: 'shopping-list', component: ShoppingListComponent },
    // { path: '**', redirectTo: '/recipes', pathMatch: 'full' }
]
@NgModule({
    imports: [RouterModule.forRoot(ROUTES)],
    exports: [RouterModule]
})
export class AppRoutingModule {  }