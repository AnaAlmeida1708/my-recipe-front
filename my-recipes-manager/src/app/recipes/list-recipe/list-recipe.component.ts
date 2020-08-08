import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-recipe',
  templateUrl: './list-recipe.component.html',
  styleUrls: ['./list-recipe.component.css']
})
export class ListRecipeComponent implements OnInit {

  recipes = [
    {
      "code": 1,
      "name": "Pãozinho",
      "tested": true,
      "methodOfPreparation": "buscar na Padaria",
      "preparationTime": "10 minutos",
      "comments": "",
      "favorite": true,
      "category": {
          "code": 3,
          "description": "Pães, Bolos, Tortas e Lanches diversos"
      },
      "type": {
          "code": 1,
          "type": "Salgada"
      },
      "prepareType": {
          "code": 6,
          "prepareType": "Outro"
      },
      "detailsRecipeIngredients": [
          {
              "quantity": "1",
              "ingredient": {
                  "code": 4,
                  "name": "pimentão verde"
              }
          },
          {
              "quantity": "2 xic",
              "ingredient": {
                  "code": 6,
                  "name": "queijo ralado"
              }
          },
          {
              "quantity": "2",
              "ingredient": {
                  "code": 1,
                  "name": "ovos"
              }
          }
      ]
  },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
