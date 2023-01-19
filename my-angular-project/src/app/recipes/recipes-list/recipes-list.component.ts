import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipes.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss']
})
export class RecipesListComponent implements OnInit {
recipes: Recipe[] = [
  new Recipe('A Test Recipe', 'this is simply a test', 'https://cdn.pixabay.com/photo/2015/08/25/03/50/background-906135_960_720.jpg'),
  new Recipe('A Test Recipe', 'this is simply a test', 'https://cdn.pixabay.com/photo/2018/02/05/19/12/strawberry-3132973__340.jpg')
];
  constructor() { }

  ngOnInit(): void {
  }

}
