import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cardslots',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cardslots.html',
  styleUrl: './cardslots.css',
})
export class Cardslots {
  @Input() time: string = '09:00';
  @Input() status: 'booked' | 'available' | 'conflict' = 'booked';
  @Input() title: string = 'Candidate Name';
  @Input() subtitle: string = 'Interview Type';
}
