// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';

// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
// import { HomeComponent } from './home/home.component';
// import { HousingLocationComponent } from './housing-location/housing-location.component';
// import { DetailsComponent } from './details/details.component';

// @NgModule({
//   declarations: [
//     AppComponent,
//     HomeComponent,
//     HousingLocationComponent,
//     DetailsComponent,
//   ],
//   imports: [
//     BrowserModule,
//     AppRoutingModule
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }

















import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
  
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserComponent } from './user/user.component';
import { FormsModule } from '@angular/forms';
import { AuthInterceptor } from './authInterceptor';
import { AppRoutingModule } from './app-routing.module';
import { SearchComponent } from './search/search.component';
import { AuthGuard } from './services/auth.guard';
import { AuthService } from './auth.service';
  
@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [AuthService,{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  },],
  bootstrap: [AppComponent]
})
export class AppModule { }