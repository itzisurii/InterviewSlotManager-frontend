import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { Cardslots } from "../cardslots/cardslots";
import { HttpClient } from '@angular/common/http';

export type InterviewStatus = 'booked' | 'available' | 'conflict';


interface Interview {
  time: string;
  status: 'AVAILABLE' | 'BOOKED' | 'CONFLICT';
  title: string;
  subtitle: string;
}

interface CalendarDay {
  day: string;
  date: number;
  isToday?: boolean;
  interviews: Interview[];
}

@Component({
  selector: 'app-calander',
  standalone: true,
  imports: [CommonModule, Cardslots],
  templateUrl: './calander.html',
  styleUrls: ['./calander.css'],
})
export class Calander {
  calendarData: CalendarDay[] = [];

  ngOnInit() {
    const today = new Date();
    const startDate = new Date(today);
    startDate.setDate(today.getDate() - today.getDay() + 1); // start from Monday

    this.calendarData = Array.from({ length: 7 }).map((_, i) => {
      const date = new Date(startDate);
      date.setDate(startDate.getDate() + i);

      return {
        day: date.toLocaleDateString('en-US', { weekday: 'short' }),
        date: date.getDate(),
        isToday: date.toDateString() === today.toDateString(),
        interviews: [], // fill dynamically from backend
      };
    });

    // Example: add mock interviews dynamically
    this.calendarData[1].interviews.push({
      time: '10:00',
      status: 'AVAILABLE',
      title: 'Java Interview',
      subtitle: 'with HR',
    });

    this.calendarData[3].interviews.push({
      time: '14:00',
      status: 'BOOKED',
      title: 'DBMS Interview',
      subtitle: 'with Panel A',
    });
  }
}