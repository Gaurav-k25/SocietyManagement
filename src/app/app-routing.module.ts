import { NgModule } from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import { StaffComponent } from './staff/staff.component';
import { OwnerComponent } from './owner/owner.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { TenantComponent } from './tenant/tenant.component';
import { VendorsComponent } from './vendors/vendors.component';
import { LetterNoticComponent } from './letter-notic/letter-notic.component';
import { VehicalComponent } from './vehical/vehical.component';
import { SocietyEventComponent } from './society-event/society-event.component';
import { AmountCollectionComponent } from './amount-collection/amount-collection.component';


const router:Routes=[
  {path:'staff',component:StaffComponent},
  {path:'owner',component:OwnerComponent},
  {path:'login',component:LoginComponent},
  {path:'registration',component:RegistrationComponent},
  {path:'tenant',component:TenantComponent},
  {path:'vendors',component:VendorsComponent},
  {path:'letternotic',component:LetterNoticComponent},
  {path:'vehical',component:VehicalComponent},
  {path:'event',component:SocietyEventComponent},
  {path:'amount',component:AmountCollectionComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(router)],
  exports:[RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [StaffComponent,OwnerComponent,LoginComponent,AmountCollectionComponent
  ,RegistrationComponent,TenantComponent,LetterNoticComponent,VendorsComponent,VehicalComponent,SocietyEventComponent]