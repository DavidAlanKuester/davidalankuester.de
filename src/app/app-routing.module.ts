import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ImprintComponent } from './imprint/imprint.component';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { DataProtectionComponent } from './data-protection/data-protection.component';
import { CvComponent } from './cv/cv.component';
import { PoliticalScienceComponent } from './political-science/political-science.component';








const routes: Routes = [
  { path: '', component: SlideshowComponent },
  { path: 'cv', component: CvComponent },
  { path: 'political-science', component: PoliticalScienceComponent },
  { path: 'imprint', component: ImprintComponent },
  { path: 'data-protection', component: DataProtectionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
