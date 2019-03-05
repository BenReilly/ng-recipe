import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Porg Souffle',
      'a souffle made from delicious porg',
      'https://starwarsblog.starwars.com/wp-content/uploads/2017/08/porg-chops-tall.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
