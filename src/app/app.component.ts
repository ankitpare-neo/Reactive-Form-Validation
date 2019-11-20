import { Component } from '@angular/core';
import {FormGroup, FormBuilder, FormControl, Validators} from '@angular/forms'
import {CustomValidator} from './CustomValidator'
import { Observable } from 'rxjs';
import { UserServiceService } from './user-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'react-form';
  registerForm: FormGroup;
    submitted = false;
  constructor(private formBuilder : FormBuilder, private ser : UserServiceService){  }

  ngOnInit() {
   
       this.registerForm = this.formBuilder.group({
            title: ['', Validators.required],
            firstName: ['', [Validators.required,CustomValidator.FirstNameValid(/^[a-zA-Z\s]+$/)]],
            lastName: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6), CustomValidator.Number(/^[0-9]+$/)]],
            confirmPassword: ['', Validators.required],
            acceptTerms: [false, Validators.requiredTrue]
       },
       {
         validators: CustomValidator.PasswordMatch
       }) 

     
       const foo = new Observable(subscriber => {
        console.log('Hello');
        subscriber.next(42);     
        subscriber.next(43);
        subscriber.complete()
        subscriber.next(44);
      });
      
      foo.subscribe(x => {
        console.log(x);
      });
      foo.subscribe(y => { 
        console.log(y);
      });



     this.ser.userDetails.subscribe(d=>{
       this.submitted  = d
     })



  }
  get f() { 
  
    return this.registerForm.controls; 
  }
 
 
  onSubmit() {
    
    console.log(this.registerForm);
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }

    // display form values on success
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
}

onReset() {
    this.submitted = false;
    this.registerForm.reset();
}

}
