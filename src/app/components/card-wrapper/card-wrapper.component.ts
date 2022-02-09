import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-wrapper',
  templateUrl: './card-wrapper.component.html',
  styleUrls: ['./card-wrapper.component.scss']
})
export class CardwrapperComponent implements OnInit {

  tarjetas = [
    {
  imagen : "assets/images/paris.jpg",
  categoria : "Vuelo",
  titulo : "Viajá a Paris",
  ofertaInfalible : false,
  precio : 654899,
},
{
  imagen : "assets/images/mede.jpg",
  categoria : "Hotel",
  titulo : "Visita Medellín",
  ofertaInfalible : true,
  precio : 5632,
},
{
  imagen : "assets/images/auto.jpg",
  categoria : "Auto",
  titulo : "Paseá por Miami",
  ofertaInfalible : true,
  precio : 56,
},
{
  imagen : "assets/images/casa.jpg",
  categoria : "Casa",
  titulo : "Casa en Miami",
  ofertaInfalible : false,
  precio : 36669,
}
];


  constructor() { }

  ngOnInit(): void {
  }

}
