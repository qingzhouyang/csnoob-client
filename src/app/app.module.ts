import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


//application modules
import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { LoginComponent } from './components/login/login/login.component';
import { MenuComponent } from './components/layout/menu/menu.component';

//primeng modules
import { MenubarModule } from 'primeng/components/menubar/menubar';
import { ButtonModule } from 'primeng/components/button/button';
import { fromEventPattern } from 'rxjs';
import { RegisterComponent } from './components/register/register.component';


import { SkinItemComponent } from './components/skin-item/skin-item.component';
import { SkinItemListComponent } from './components/skin-item-list/skin-item-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CarouselComponent,
    MenuComponent,
    LoginComponent,
    RegisterComponent,
    SkinItemComponent,
    SkinItemListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenubarModule,
    ButtonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
