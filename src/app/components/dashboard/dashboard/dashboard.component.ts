import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { TopBarComponent } from '../../shared/top-bar/top-bar.component';

@Component({
  selector: 'mapache-quizer-dashboard',
  standalone: true,
  imports: [RouterOutlet, TopBarComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {}
