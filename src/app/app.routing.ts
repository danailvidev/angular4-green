import { Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { CountriesComponent } from './countries/countries.component';
import { SettingsComponent } from './settings/settings.component';

export const appRoutes: Routes = [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'settings', component: SettingsComponent },
    { path: 'countries', component: CountriesComponent },
    { path: '', component: DashboardComponent },
    { path: '**', component: DashboardComponent },
]