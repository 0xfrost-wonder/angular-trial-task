import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// import { AlertWidgetComponent } from "./alert-widget/alert-widget.component";
import { AlertInfoComponent } from "./alert-info/alert-info.component";
import { ContentFieldComponent } from "./content-field/content-field.component";
import { EventFieldComponent } from "./event-field/event-field.component";
import { EventInfoComponent } from "./event-info/event-info.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { TeamInfoComponent } from "./team-info/team-info.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, CommonModule, TeamInfoComponent, AlertInfoComponent, ContentFieldComponent, EventInfoComponent, EventFieldComponent, NavbarComponent]
})

// @NgModule({
//   declarations: [
//     AlertWidgetComponent
//   ],
//   // Other module configurations
// })

export class AppComponent implements OnInit {
  constructor() { }
  
  jsonData = require('../assets/TEST_DATA.json');
  alertInfo: any = {};
  contentFieldData: any;

  ngOnInit(): void {

    this.alertInfo = {
      name: this.jsonData.Name,
      rule: this.jsonData.SourceRuleIdentifier,
      description: this.jsonData.Description,
      detectionTime: convertMillisecondsToDateTime(this.jsonData.StartTime)
    };

    // Convert the alertInfo object to an array by pushing it into an array
    let alertInfoArray: any[] = [];
    alertInfoArray.push(this.alertInfo);
    alertInfoArray.push(this.alertInfo);

    this.alertInfo = alertInfoArray;

    // console.log(this.jsonData.Events);
  }
  

  showTeamInfoComponent: boolean = true;
  showAlertInfoComponent: boolean = false;

  onItemSelected(item: string): void {
    // Perform any necessary logic based on the selected item
    // For example, if item 1 is selected, show the static component
    if (item === 'Item 1') {
      this.showTeamInfoComponent = false;
      this.showAlertInfoComponent = true;
    } else {
      this.showTeamInfoComponent = true;
      this.showAlertInfoComponent = false;
      this.contentFieldData = null;
    }
  }
  onRowClicked(rowData: any): void {
    this.contentFieldData = rowData;
    // console.log(this.contentFieldData);
  }

  eventsData: any = this.jsonData.Events;
  
  title = 'trial SOAR';
}
function convertMillisecondsToDateTime(milliseconds: number): string {
    const date: Date = new Date(milliseconds);

    // Extract the components of the date
    const year: number = date.getFullYear();
    const month: string = ('0' + (date.getMonth() + 1)).slice(-2); // Adding leading zero if needed
    const day: string = ('0' + date.getDate()).slice(-2);
    const hours: string = ('0' + date.getHours()).slice(-2);
    const minutes: string = ('0' + date.getMinutes()).slice(-2);
    const seconds: string = ('0' + date.getSeconds()).slice(-2);

    // Construct the formatted date and time string
    const formattedDateTime: string = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;

    return formattedDateTime;
}


