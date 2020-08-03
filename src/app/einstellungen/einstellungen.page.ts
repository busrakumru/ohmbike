import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-einstellungen',
  templateUrl: './einstellungen.page.html',
  styleUrls: ['./einstellungen.page.scss'],
})
export class EinstellungenPage implements OnInit {

  @ViewChild(MatAccordion) accordion: MatAccordion;

  constructor(
    private router: Router,
    public alertCtrl: AlertController,
    //private cdr: ChangeDetectorRef,
  ) { }

  async showAlert(header: string, message: string) {

    const alert = await this.alertCtrl.create({
      header,
      message,
      buttons: ['OK']
    });

    await alert.present();

  }

  async AlertTeilnahme() {

    this.showAlert("Information", "Sobald ein Nutzer an deiner erstellten Aktivität teilnimmt, wirst du eine Mitteilung erhalten !")

  }

  async AlertKatalog() {

    this.showAlert("Information", "Wenn du mich aktivierst, wirst du über die neu eingetroffenen Ohm Bike-Produkte informiert !")

  }

  async AlertWerbung() {

    this.showAlert("Information", "Lass dich über tolle Rabatte und Angebote von Ohm Bike überraschen !")

  }

  goUberuns() {

    this.router.navigate(['uberuns']);
  }

  goImpressum() {

    this.router.navigate(['impressum']);
  }

  goDatenschutz() {

    this.router.navigate(['datenschutz']);
  }

  goTextgroesse() {

    this.router.navigate(['textgroesse']);
  }



  ngOnInit() {
  }

}
