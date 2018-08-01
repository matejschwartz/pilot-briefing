import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, FormArray } from '@angular/forms';
import { minFilledValidator } from '../../validators/min-filled-validator.directive';
import { minSelectedCheckboxesValidator } from '../../validators/min-selected-checkboxes.directive';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  types = [
    { value: 'METAR', name: 'METAR', selected: true },
    { value: 'SIGMET', name: 'SIGMET', selected: false },
    { value: 'TAF', name: 'TAF', selected: false }
  ];

  briefingForm: FormGroup;

  constructor() {}

  ngOnInit() {
    this.briefingForm = new FormGroup({
      'types': new FormArray(this.buildTypes(), minSelectedCheckboxesValidator(1)),
      'airports': new FormControl(),
      'countries': new FormControl(),
    }, { validators: minFilledValidator(['airports', 'countries'], 1) });
  }

  formSubmit() {
    console.log(this.briefingForm.value);
  }

  buildTypes() {
    return this.types.map(type => {
      return new FormControl(type.selected);
    });
  }

  // easy access
  get formControls() { return this.briefingForm.controls; }

  // TODO create request data from form data
}
