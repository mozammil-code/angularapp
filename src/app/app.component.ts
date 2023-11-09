import { Component,ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'templateDrivenForms';
  defaultcountry="india";
  firstname:string=""
  lastname:string="";
  email:string="";
  gen:string='';
  country:string='';
  details:string='';
  defaultGender="female"
  gender=[
    {id:'1',value:'Male'},
    {id:'2',value:'female'},
    {id:'3', value:'other'}
  ]
  constructor(private http:HttpClient){

  }
  @ViewChild('myform') form!: NgForm;

  setdefaultvalue(){
    // this.form.value.personDetails.firstname='john';
    // this.form.value.personDetails.lastname='Cena';
    // this.form.value.personDetails.email='mozammilahmad667@gmail.com'

    // this.form.setValue({
    //   country:'',
    //   gender: '',
    //   hobbies: '',
    //   personDetails:{
    //     firstname:'Sana',
    //     lastname:'Mozammil',
    //     email:'sanamozammil667@gmail.com'
    //   }
    // })
    this.form.form.patchValue({
      personDetails:{
        firstname:'Sana',
       lastname:'Mozammil',
       email:'sanamozammil667@gmail.com'
        
      }
    })
  }

  

  // onSubmit(form:NgForm){
  //   console.log(this.form);
  // }
  // onSubmit(){
  //   console.log(this.form);
  // }
  onSubmit(){
    console.log(this.form);
    this.firstname=this.form.value.personDetails.firstname;
    this.lastname=this.form.value.personDetails.lastname;
    this.email=this.form.value.personDetails.email;
    this.gen=this.form.value.gender;
    this.country=this.form.value.country;
    this.form.reset();
  }
 

  sendToServer(){
    
  }

}
