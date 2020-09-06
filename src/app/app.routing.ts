
import { Routes, RouterModule } from '@angular/router';




const appRoutes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
     {
        path: 'countries',
        component: CountriesComponent
    },
    
    // ERROR 
    { 
      path: '404',
      component: Error404Component,
      data: {
        title:'Page-404'
      }
    },
    { 
      path: '500',
      component: Error500Component,
      data: {
        title:'Page-500'
      }
    },
    
    { path: '**', component: P404Component }
];

export const routing = RouterModule.forRoot(appRoutes);
