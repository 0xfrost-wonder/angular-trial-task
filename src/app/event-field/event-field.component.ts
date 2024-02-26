import { CommonModule } from '@angular/common';
import { Component, Inject, Input, OnInit, Optional } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-event-field',
  standalone: true,
  imports: [ CommonModule, MatDialogModule],
  templateUrl: './event-field.component.html',
  styleUrl: './event-field.component.css'
})

export class EventFieldComponent implements OnInit {
  private favoriteItems: any[] = [];
  @Input() rowData: any;
  
  selectEvent(eventField: any) {
    this.data.onRowClick(eventField);
  }
  constructor(
    @Optional()public dialogRef: MatDialogRef<EventFieldComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    this.favoriteItems = data.data2;
  }

  addFavoriteItem(item: any): void {
    this.favoriteItems.push(item);
  }

  removeFavoriteItem(item: any): void {
    const index = this.favoriteItems.indexOf(item);
    if (index > -1) {
      this.favoriteItems.splice(index, 1);
    }
    console.log("removed", this.favoriteItems);
  }


  isFavorite(data: any): boolean {
    return this.favoriteItems.includes(data);
  }

  ngOnInit(): void {
    // console.log(this.data);
  }

}
