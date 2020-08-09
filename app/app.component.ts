import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Recipe } from './Recipe/recipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title: string;
  recipeApiUrl: string;
  recipeList: Recipe[];
  
   constructor(private http: HttpClient) {
   	this.title = 'HackedRecipe'; 
    this.recipeApiUrl = 'http://starlord.hackerearth.com/recipe';
  }
  
  ngOnInit(){
  	this.getItems().subscribe(data => {
      this.recipeList = data;
    });
  }
  
  public getItems(): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(this.recipeApiUrl);
  }

}
