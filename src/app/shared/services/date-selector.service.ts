import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DateSelectorService {
  #currentDate = signal(new Date());
  currentDate = this.#currentDate.asReadonly();

  getCurrentDate(): Date {
    return this.#currentDate();
  }

  getCurrentMonth(): Date {
    const date = this.#currentDate();
    return new Date(date.getFullYear(), date.getMonth(), 1);
  }

  setCurrentDate(newDate: Date) {
    this.#currentDate.set(newDate);
  }

  previousMonth() {
    const newDate = new Date(
      this.#currentDate().setMonth(this.#currentDate().getMonth() - 1)
    );
    this.#currentDate.set(newDate);
  }

  nextMonth() {
    const newDate = new Date(
      this.#currentDate().setMonth(this.#currentDate().getMonth() + 1)
    );
    this.#currentDate.set(newDate);
  }

  resetToToday() {
    this.#currentDate.set(new Date());
  }
}
