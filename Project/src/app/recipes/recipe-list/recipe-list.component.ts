import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Receta de prueba', 'Es una prueba', 'https://fripozo.com/wp-content/uploads/icon-recetas.png'),
    new Recipe('Receta de prueba', 'Es una prueba', 'https://fripozo.com/wp-content/uploads/icon-recetas.png')
  ];

  constructor() { }

  ngOnInit() {
  }

}
