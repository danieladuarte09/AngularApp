import { Component } from '@angular/core';

@Component({ //Decorador 
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularApp';
  saludo= "Hola Hola"
}
