import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/guards/auth.guard';
import { HomepageComponent } from './home/homepage/homepage.component';
import { PaymentComponent } from './pay/payment/payment.component';
import { ProdpageComponent } from './product/prodpage/prodpage.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';

const routes: Routes = [
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'',
    component:RegisterComponent
  },
  {
    path:'login',
    component:LoginComponent,
  }
  ,
  {
    path:'homepage',
    component:HomepageComponent
    ,canActivate:[AuthGuard]
  },
  {
    path:'products',
    component:ProdpageComponent,canActivate:[AuthGuard]
  },
  {
   path:'cart',loadChildren:()=>import('./cart/cart.module')
   .then(mod=>mod.CartModule),canActivate:[AuthGuard]
  },
{
    path:'payment',
    component:PaymentComponent,canActivate:[AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
