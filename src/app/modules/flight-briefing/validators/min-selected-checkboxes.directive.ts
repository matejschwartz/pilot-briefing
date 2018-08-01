import { ValidatorFn, FormArray, ValidationErrors } from '@angular/forms';

export const minSelectedCheckboxesValidator = (min: number): ValidatorFn => (formArray: FormArray): ValidationErrors | null => {
    const totalSelected = formArray.controls
        .map(control => control.value)
        .reduce((total, item) => item ? total + item : total, 0);

    return totalSelected >= min ? null : { minSelectedCheckboxes: true };;
};