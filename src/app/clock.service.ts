import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClockService {
  private date: Date;

  constructor() {
    this.date = new Date()
  }

  private setDate(value: Date): void{
    this.date = value
  }

  private generateDate(): void {
    this.setDate(new Date())
  }

  getInitialDate(): Date {
    return this.date
  }

  getDate(): Date{
    this.generateDate()
    return this.date
  }
}
