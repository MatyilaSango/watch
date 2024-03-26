import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ClockService } from '../clock.service';

@Component({
  selector: 'app-clock',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './clock.component.html',
  styleUrl: './clock.component.scss',
})
export class ClockComponent implements OnInit {
  title: string = 'WATCH';
  clockImg: string = "../../assets/shutdown.svg"
  isClockOn: boolean = false

  clock: ClockService = inject(ClockService);
  time = this.clock.getInitialDate();

  hoursArmContainer = `rotate: ${(this.time.getHours() / 12) * 360}deg`;
  minutesArmContainer = `rotate: ${(this.clock.getDate().getMinutes() / 60) * 360}deg`;
  secondsArmContainer = `rotate: ${(this.clock.getDate().getSeconds() / 60) * 360}deg`;

  ngOnInit(): void {
    
  }

  updateTime(date: Date) {
    this.time = date
    this.hoursArmContainer = `rotate: ${(date.getHours() / 12) * 360}deg`;
    this.minutesArmContainer = `rotate: ${(date.getMinutes() / 60) * 360}deg`;
    this.secondsArmContainer = `rotate: ${(date.getSeconds() / 60) * 360}deg`;
  }

  startClock() {
    this.isClockOn = !this.isClockOn
    let interval = setInterval((): void => {
      this.updateTime(this.clock.getDate());
      if (!this.isClockOn) clearInterval(interval)
    }, 1000);
  }
}
