import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CitiesComponent } from './pages/cities/cities.component';
import { DatabasePageComponent } from './pages/database-page/database-page.component';
import { MainComponent } from './pages/main/main.component';
import { ReloadComponent } from './pages/reload/reload.component';

const routes: Routes = [
  { path: "main", component: MainComponent },
  { path: "", component: MainComponent },
  { path: "reload", component: ReloadComponent },
  { path: "cities/:country", component: CitiesComponent },
  { path: "databasePage", component: DatabasePageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
