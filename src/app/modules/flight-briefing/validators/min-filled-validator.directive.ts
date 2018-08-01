import { ValidatorFn, FormGroup, ValidationErrors } from '@angular/forms';

export const minFilledValidator = (inputs: Array<string>, min: number): ValidatorFn => (control: FormGroup): ValidationErrors | null => {
    const filled = inputs
        .map((input) => control.get(input).value ? 1 : 0)
        .reduce((total, item) => item ? total + item : total, 0);

    return filled >= min ? null : { minFilled: true };
};