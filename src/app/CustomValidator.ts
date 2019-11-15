import { AbstractControl, ValidatorFn, FormGroup } from '@angular/forms'


export class CustomValidator {

  constructor() { }
  static FirstNameValid(reg: RegExp): ValidatorFn {
    return (control: AbstractControl): { [key: string]: boolean } | null => {
      if (control.value.trim() == "dhanraj") {
        return { "custom": true }
      }

      const ALlowed = reg.test(control.value)
      // console.log("--------------", ALlowed)
      return ALlowed ? null : { "custom": true }
    }

  }

  static Number(reg: RegExp): ValidatorFn {
    return (control: AbstractControl): { [key: string]: boolean } | null => {
      const Allowed = reg.test(control.value)
      // console.log("Number Valid----", Allowed)
      return Allowed ? null : { 'cusNumber': true }
    }


  }


  // Validations for the Password and Confirm Password

//  static PasswordMatch(controlName: string, matchingControlName: string) {
//     return (formGroup: FormGroup) => {
//         const pas = formGroup.controls[controlName];
      
//         const cPas = formGroup.controls[matchingControlName];
//         if (cPas.errors && !cPas.errors.mustMatch) {
//             // return if another validator has already found an error on the matchingControl
//             return;
//         }

//         // set error on matchingControl if validation fails
//         if (pas.value !== cPas.value) {
//             cPas.setErrors({ mustMatch: true });
//         } else {
//             cPas.setErrors(null);
//         }
//     }
// }
static PasswordMatch(group: FormGroup) { // here we have the 'passwords' group
  let pass = group.get('password').value;
  let confirmPass = group.get('confirmPassword').value;
  return pass === confirmPass ? null : { "notSame": true }     
}



}