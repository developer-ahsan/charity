import { WebfooterComponent } from './common/webfooter/webfooter.component';
import { WebheaderComponent } from './common/webheader/webheader.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebsiteRoutingModule } from './website-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { WebsiteComponent } from './website.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';


@NgModule({
  declarations: [WebsiteComponent,WebheaderComponent, WebfooterComponent, HomeComponent, GalleryComponent, AboutComponent, ContactComponent],
  imports: [
    CommonModule,
    WebsiteRoutingModule
  ]
})
export class WebsiteModule { }
