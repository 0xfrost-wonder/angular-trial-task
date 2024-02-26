import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-content-field',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './content-field.component.html',
  styleUrl: './content-field.component.css'
})

export class ContentFieldComponent {
  @Input() alertsCount: number | undefined;
  @Input() contentFieldData: any = {};
}
