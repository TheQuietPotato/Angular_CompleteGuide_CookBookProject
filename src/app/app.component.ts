import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  shopListOrRecepies = 'recipes';

  setActiveComp(s: string) {
    this.shopListOrRecepies = s;
  }
}
