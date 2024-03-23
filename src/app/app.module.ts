import {BrowserModule} from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule,routingComponents } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { TenantComponent } from './tenant/tenant.component';
import { VendorsComponent } from './vendors/vendors.component';
import { LetterNoticComponent } from './letter-notic/letter-notic.component';
import { VehicalComponent } from './vehical/vehical.component';
import { SocietyEventComponent } from './society-event/society-event.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AmountCollectionComponent } from './amount-collection/amount-collection.component';
import { AngularFireModule } from '@angular/fire'
import { AngularFirestoreModule } from '@angular/fire/firestore'
import { environment } from 'src/environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import {FormsModule} from '@angular/forms'

@NgModule({
  declarations:[
    AppComponent,
    routingComponents,
    LoginComponent,
    RegistrationComponent,
    TenantComponent,
    VendorsComponent,
    LetterNoticComponent,
    VehicalComponent,
    SocietyEventComponent,
    AmountCollectionComponent
  ],
  bootstrap: [AppComponent],
  imports: [AppRoutingModule,
    BrowserModule,NgbModule,FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    // AngularFirestoreModule.enablePersistence(),
     AngularFirestoreModule,
     BrowserAnimationsModule, // required animations module
     ToastrModule.forRoot(), AppRoutingModule 
  ],
})
export class AppModule { }
