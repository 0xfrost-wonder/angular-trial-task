import { Routes } from '@angular/router';
import { EventInfoComponent } from './event-info/event-info.component';

export const routes: Routes = [
    {path: 'event-list', component: EventInfoComponent, loadChildren: () => import('./event-info/event-info.component').then(m => m.EventInfoComponent)},
];
