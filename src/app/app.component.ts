import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'gatitos';
  // Le envío esta data al HTML
  //Para mostrarla en el HTML usno {{ nombreDato }}
  edad = 45;
  numeros = [67, 789, 99, 76];
}
