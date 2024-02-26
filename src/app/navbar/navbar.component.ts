import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  @Input() alertsCount: number | undefined;
  @Output() itemSelected: EventEmitter<string> = new EventEmitter<string>();

  onItemClick(item: string): void {
    this.itemSelected.emit(item);
  }
}
