import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-menu',
  imports: [RouterOutlet],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  itensMenu = [
    { label: 'Inicio', link: '' },
    { label: 'Clientes', link: '/clientes' },
    { label: 'Sobre', link: '/sobre' },
 ] 
  
}