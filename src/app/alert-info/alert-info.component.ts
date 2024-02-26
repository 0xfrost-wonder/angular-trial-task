import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Injectable, Input, Output } from '@angular/core';

@Component({
  selector: 'app-alert-info',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './alert-info.component.html',
  styleUrl: './alert-info.component.css'
})

@Injectable({
  providedIn: 'root'
})

export class AlertInfoComponent {
  constructor() {}

  @Output() rowClicked: EventEmitter<any> = new EventEmitter<any>();
  
  onRowClick(rowData: any): void {
    this.rowClicked.emit(rowData);
  }
  
  @Input() alertInfo: any = {};
  @Input() eventsData: any = {};

}
