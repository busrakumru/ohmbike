import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'start',
    loadChildren: () => import('./start/start.module').then( m => m.StartPageModule)
  },
  {
    path: '',
    redirectTo: 'onboarding',
    pathMatch: 'full'
  },
  {
    path: 'onboarding',
    loadChildren: () => import('./onboarding/onboarding.module').then( m => m.OnboardingPageModule)
  },
  {
    path: 'registrierung',
    loadChildren: () => import('./registrierung/registrierung.module').then( m => m.RegistrierungPageModule)
  },
  {
    path: 'einstellungen',
    loadChildren: () => import('./einstellungen/einstellungen.module').then( m => m.EinstellungenPageModule)
  },
  {
    path: 'uberuns',
    loadChildren: () => import('./uberuns/uberuns.module').then( m => m.UberunsPageModule)
  },
  {
    path: 'impressum',
    loadChildren: () => import('./impressum/impressum.module').then( m => m.ImpressumPageModule)
  },
  {
    path: 'datenschutz',
    loadChildren: () => import('./datenschutz/datenschutz.module').then( m => m.DatenschutzPageModule)
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
    path: 'profilbearbeiten',
    loadChildren: () => import('./modals/profilbearbeiten/profilbearbeiten.module').then( m => m.ProfilbearbeitenPageModule)
  },
 
  {
    path: 'passwort',
    loadChildren: () => import('./modals/passwort/passwort.module').then( m => m.PasswortPageModule)
  },
  {
    path: 'profilvonanderen',
    loadChildren: () => import('./profilvonanderen/profilvonanderen.module').then( m => m.ProfilvonanderenPageModule)
  },
  {
    path: 'wettbewerb',
    loadChildren: () => import('./wettbewerb/wettbewerb.module').then( m => m.WettbewerbPageModule)
  },
  {
    path: 'textgroesse',
    loadChildren: () => import('./textgroesse/textgroesse.module').then( m => m.TextgroessePageModule)
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
    path: 'produkt',
    loadChildren: () => import('./produkt/produkt.module').then( m => m.ProduktPageModule)
  },
  {
    path: 'produkt2',
    loadChildren: () => import('./produkt2/produkt2.module').then( m => m.Produkt2PageModule)
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
    path: 'katalog',
    loadChildren: () => import('./katalog/katalog.module').then( m => m.KatalogPageModule)
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
