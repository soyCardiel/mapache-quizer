import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopBarComponent } from '../../shared/top-bar/top-bar.component';
import { LayoutImports } from '../../shared/imports/layouts.import';

@Component({
  selector: 'mapache-quizer-dashboard',
  standalone: true,
  imports: [RouterOutlet, TopBarComponent, LayoutImports],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {}
