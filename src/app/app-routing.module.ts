import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: '',
    redirectTo: 'tabs/tab4',
    pathMatch: 'full',
  },
  {
    path: 'onboarding',
    loadChildren: () => import('./onboarding/onboarding.module').then( m => m.OnboardingPageModule)
  },
  {
    path: 'registration',
    loadChildren: () => import('./registration/registration.module').then( m => m.RegistrationPageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./settings/settings.module').then( m => m.SettingsPageModule),
  },
  {
    path: 'aboutus',
    loadChildren: () => import('./aboutus/aboutus.module').then( m => m.AboutusPageModule)
  },
  {
    path: 'imprint',
    loadChildren: () => import('./imprint/imprint.module').then( m => m.ImprintPageModule)
  },
  {
    path: 'm-route',
    loadChildren: () => import('./modals/m-route/m-route.module').then( m => m.MRoutePageModule)
  },
  {
    path: 'popovercomponent',
    loadChildren: () => import('./popovercomponent/popovercomponent.module').then( m => m.PopovercomponentPageModule)
  },
  {
    path: 'editprofile',
    loadChildren: () => import('./modals/editprofile/editprofile.module').then( m => m.EditprofilePageModule)
  },
 
  {
    path: 'password',
    loadChildren: () => import('./modals/password/password.module').then( m => m.PasswordPageModule)
  },
  {
    path: 'testuser',
    loadChildren: () => import('./testuser/testuser.module').then( m => m.TestuserPageModule)
  },
  {
    path: 'competitions',
    loadChildren: () => import('./competitions/competitions.module').then( m => m.CompetitionsPageModule)
  },
  {
    path: 'textsize',
    loadChildren: () => import('./textsize/textsize.module').then( m => m.TextsizePageModule)
  },
  {
    path: 'test',
    loadChildren: () => import('./test/test.module').then( m => m.TestPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'qr-code',
    loadChildren: () => import('./qr-code/qr-code.module').then( m => m.QrCodePageModule)
  },
  {
    path: 'product',
    loadChildren: () => import('./product/product.module').then( m => m.ProductPageModule)
  },
  {
    path: 'product2',
    loadChildren: () => import('./product2/product2.module').then( m => m.Product2PageModule)
  },
  {
    path: 'details',
    loadChildren: () => import('./modals/details/details.module').then( m => m.DetailsPageModule)
  },
  {
    path: 'detailsob',
    loadChildren: () => import('./modals/detailsob/detailsob.module').then( m => m.DetailsobPageModule)
  },
  {
    path: 'catalog',
    loadChildren: () => import('./catalog/catalog.module').then( m => m.CatalogPageModule)
  }
  
  /*{
    path: 'tab4',
    loadChildren: () => import('./tab4/tab4.module').then( m => m.Tab4PageModule)
  },*/

  
];





@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
