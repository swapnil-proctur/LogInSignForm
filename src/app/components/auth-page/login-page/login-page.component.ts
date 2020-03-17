import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {


  countries: any[] = [
    {
      country: "Afghanistan",
      states: ["Badakhshan", "Badghis", "Baghlan", "Balkh", "Bamian"]
    },
    {
      country: "Albania",
      states: ["Berat", "Dibres", "Durres", "Elbasan"]
    },
    {
      country: "Algeria",
      states: ["Adrar", "Ain Defla", "Ain Temouchent", "Alger", "Annaba"]
    },
    {
      country: "Andorra",
      states: ["Andorra la Vella", "Canillo", "Encamp", "Escaldes-Engordany"]
    },
    {
      country: "Angola",
      states: ["Bengo", "Benguela", "Bie", "Cabinda", "Cuando Cubango"]
    },
    {
      country: "Antarctica",
      states: []
    },
    {
      country: "Antigua and Barbuda",
      states: ["Barbuda", "Redonda", "Saint George", "Saint John"]
    },
    {
      country: "Argentina",
      states: ["Buenos Aires", "Buenos Aires Capital", "Catamarca", "Chaco"]
    }
  ]
  states: any[] = [];
  loader: boolean = false;

  model: any = {};
  logInModel: any = {};
  logIn: boolean = false;

  constructor(
    private router: Router,
    private toastrService: ToastrService
  ) { }

  ngOnInit() {
    this.model.country = "";
    this.model.state = "";
    this.model.gender = "male";
    this.model.terms = true;
  }

  toggleLogin(){
    this.logIn = !this.logIn;
  }

  getState(){
    for(let i = 0; i < this.countries.length; i++){
      if(this.model.country == this.countries[i].country){
        this.states = this.countries[i].states;
      }
    }
  }

   onLogIN() {
     this.loader = true;
     let self = this;
     alert('Log in Details :-' + JSON.stringify(this.logInModel))
     setTimeout(function(){
       self.toastrService.success('Logged In', '')
       self.router.navigateByUrl('/profile');
      }, 3000);

   }

   onSubmitForm(){
     this.loader = true;
     let self = this;
     setTimeout(function(){
       alert('User Details :-)\n\n' + JSON.stringify(self.model))
       self.toastrService.success('You have successfully registered', '')
       self.logIn = !self.logIn;
       self.loader = false;
       self.model = "";
      }, 3000);


   }

}
