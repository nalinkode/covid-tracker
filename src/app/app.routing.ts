
import { Routes, RouterModule } from '@angular/router';




const appRoutes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    
    // ERROR 
    { 
      path: '404',
      component: P404Component,
      data: {
        title:'Page-404'
      }
    },
    { 
      path: '500',
      component: P500Component,
      data: {
        title:'Page-500'
      }
    },
    
    { path: '**', component: P404Component }
];

export const routing = RouterModule.forRoot(appRoutes);
