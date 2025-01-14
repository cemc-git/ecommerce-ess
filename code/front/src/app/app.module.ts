import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatExpansionModule } from '@angular/material/expansion';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ClienteHomeComponent } from './components/cliente/cliente-home/cliente-home.component';
import { ClienteShoppingCartComponent } from './components/cliente/cliente-shopping-cart/cliente-shopping-cart.component';
import { ClienteDebitCardComponent } from './components/cliente/cliente-debit-card/cliente-debit-card.component';
import { ClienteProfilePageComponent } from './components/cliente/cliente-profile-page/cliente-profile-page.component';
import { AdminProductsComponent } from './components/empresa/admin-products/admin-products.component';
import { AdminSalesComponent } from './components/empresa/admin-sales/admin-sales.component';
import { AdminUsersComponent } from './components/empresa/admin-users/admin-users.component';
import { AdminProfilePageComponent } from './components/empresa/admin-profile-page/admin-profile-page.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminAddUserComponent } from './components/empresa/admin-add-user/admin-add-user.component';
import { AdminAddProductComponent } from './components/empresa/admin-add-product/admin-add-product.component';
import { AdminEditProductComponent } from './components/empresa/admin-edit-product/admin-edit-product.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ClienteHomeComponent,
    ClienteShoppingCartComponent,
    ClienteDebitCardComponent,
    ClienteProfilePageComponent,
    AdminProductsComponent,
    AdminSalesComponent,
    AdminUsersComponent,
    AdminProfilePageComponent,
    AdminAddUserComponent,
    AdminAddProductComponent,
    AdminEditProductComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatTableModule,
    MatButtonToggleModule,
    MatExpansionModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
