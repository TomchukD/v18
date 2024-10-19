import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from './components/menu/side-bar/side-bar.component';
import { ProfileOverviewComponent } from 'src/app/components/profile-owerview/profile-overview.component';
import { AppComponent } from 'src/app/app.component';
import { MenuModule } from 'src/app/components/menu/menu.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WrapperComponent } from './components/wrapper/wrapper.component';
import { HeaderComponent } from './components/header/header.component';
import { MatFormField, MatPrefix } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatInput } from '@angular/material/input';
import { ProfileComponent } from './components/profile-owerview/profile/profile.component';

@NgModule({
    declarations: [
        AppComponent,
        ProfileOverviewComponent,
        WrapperComponent,
        HeaderComponent,
        ProfileComponent
    ],
    imports: [BrowserModule, BrowserAnimationsModule, CommonModule, MenuModule, MatFormField, MatIcon, MatPrefix, MatInput],
    exports: [
        ProfileOverviewComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
