import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClockComponent } from './clock/clock.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ClockComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {

}
