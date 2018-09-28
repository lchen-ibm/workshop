import { FormControl, ValidationErrors } from '@angular/forms';


export function testValidator(validator: string) {
  return (control: FormControl): ValidationErrors | undefined => {
    if (control.value !== validator) {
      return {
        testError: true
      };
    }
  };
}
