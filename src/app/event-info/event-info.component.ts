import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DataTableDirective, DataTablesModule } from "angular-datatables";
import { EventFieldComponent } from '../event-field/event-field.component';
import { FavoriteService } from '../favorite.service';
@Component({
  selector: 'app-event-info',
  standalone: true,
  imports: [CommonModule, DataTablesModule, EventFieldComponent],
  templateUrl: './event-info.component.html',
  styleUrl: './event-info.component.css'
})


export class EventInfoComponent implements OnInit {
  @Input() eventsData: any = {};
  public eventsObject: any = {};
  constructor(
    private favoriteService: FavoriteService,
    public dialog: MatDialog
  ) {}

  @ViewChild(DataTableDirective, {static: false})
  isModalOpen: boolean = false;
  isShowFavorite: boolean = false;
  selectedRow: any;

  datatableElement?: DataTableDirective;
  dtOptions: DataTables.Settings = {};

  ngOnInit(): void {
    this.dtOptions = {
      pageLength:10,
    }
    this.eventsObject = this.eventsData;
  }
  
  ngAfterViewInit(): void {
    $('input[type="text"]').on('keyup', function () {
      const columnIndex = $(this).closest('th').index();
      const searchText = (<HTMLInputElement>this).value.toString().toLowerCase(); // Get the value of the input field
      $('#eventInfoTable').DataTable().column(columnIndex).search(searchText).draw();
    });
  }
  openModal(event: any) {
    const dialogRef = this.dialog.open(EventFieldComponent, {
      width: '500px',
      data: {
        event,
        data2: this.favoriteService.getFavoriteItems(),
        isShowFavorite: this.favoriteService.isShowFavorite,
        onRowClick: (itemKey: any) => {
          // console.log('Row clicked:', rowData);
          // Handle the row click here
          // this.selectedRow = rowData;
          this.receiveDataFromChild(itemKey);
        }
      }
    });

    this.selectedRow = event;
    this.isModalOpen = true;
  }


  closeModal() {
    this.isModalOpen = false;
  }

  public isFavorite(data: any): boolean {
    return this.favoriteService.isItemInFavorites(data);
  }

  receiveDataFromChild(data: any) {
    if (this.isFavorite(data)) {
      this.favoriteService.removeFavoriteItem(data);
    } else {
      this.favoriteService.addFavoriteItem(data);
    }
  }

  toggleShow(){
    this.isShowFavorite = !this.isShowFavorite;
    this.favoriteService.isShowFavorite = this.isShowFavorite;
    if(this.isShowFavorite){
      this.removeObjectsWithoutKeys(this.favoriteService.getFavoriteItems())
    }
    else {
      this.eventsObject = this.eventsData;
    }
  }

  removeObjectsWithoutKeys(keys: any[]): void {
    for (let i = 0; i < keys.length; i++) {
      this.eventsObject = this.eventsObject.filter((item: any) => item._rawDataFields.hasOwnProperty( keys[i]));
    }
  }
}