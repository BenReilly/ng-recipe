import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipe-book',
  templateUrl: './recipe-book.component.html',
  styleUrls: ['./recipe-book.component.scss']
})
export class RecipeBookComponent implements OnInit {
  displayedRecipe: Recipe;

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelection(recipe: Recipe) {
    this.displayedRecipe = recipe;
  }

}
