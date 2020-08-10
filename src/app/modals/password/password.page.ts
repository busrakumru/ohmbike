import { Component, OnInit } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-password',
  templateUrl: './password.page.html',
  styleUrls: ['./password.page.scss'],
})
export class PasswordPage implements OnInit {

  gespeichert = 0;
  showLoader: boolean;

  hide = true;
  hidepw = true;
  hidesecondpw = true;


  //userInfo: any = {};
  //isUserLoggedIn: any = false;

  registrationForm: FormGroup;
  submitted = false;



  constructor(
    private modalController: ModalController,
    private formBuilder: FormBuilder,
    public toastController: ToastController,
  ) { }

  showProgressBar() {
    this.showLoader = true;
  }

  hideProgressBar() {
    this.showLoader = false;
  }

  


  get password() {
    return this.registrationForm.get("password");
  }

  get password2() {
    return this.registrationForm.get("password2");
  }
  get password3() {
    return this.registrationForm.get("password3");
  }


  get formctrl() {
    return this.registrationForm.controls;
  }

  ngOnInit() {


    this.registrationForm = this.formBuilder.group({

      password: ["", [Validators.required]],
      password2: ["", [Validators.required, Validators.minLength(4)]],
      password3: ["", [Validators.required]]

    }, {
      validator: this.confirmPasswordMatch('password2', 'password3')
    });


  }

  async submit() {
    this.submitted = true;

    
    setInterval(() => {
      this.showProgressBar();
      this.gespeichert += .1;

      if (this.gespeichert === 0.7) {

        //this.modalController.dismiss();
        this.closeModal();

      }
    }, 100)
  }


  confirmPasswordMatch(controlName: string, matchingControlName: string) {

    return (formgroup: FormGroup) => {

      const control = formgroup.controls[controlName];
      const matchingControl = formgroup.controls[matchingControlName];

      if (matchingControl.errors && !matchingControl.errors.mustMatch) {
        // return if another validator has already found an error on the matchingControl
        return;
      }

      if (control.value !== matchingControl.value) {

        matchingControl.setErrors({ confirmPasswordMatch: true });
      } else {

        matchingControl.setErrors(null);
      }
    }


  }

  async closeModal() {

    this.modalController.dismiss();

  }

}
