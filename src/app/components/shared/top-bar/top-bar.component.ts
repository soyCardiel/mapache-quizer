import { Component } from '@angular/core';
import { ContainerComponent, NavbarModule } from '@coreui/angular';

@Component({
  selector: 'mapache-quizer-top-bar',
  standalone: true,
  imports: [NavbarModule, ContainerComponent],
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.scss',
})
export class TopBarComponent {}
