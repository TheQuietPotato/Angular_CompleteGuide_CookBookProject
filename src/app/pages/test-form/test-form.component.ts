import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-test-form',
  templateUrl: './test-form.component.html',
  styleUrls: ['./test-form.component.css']
})
export class TestFormComponent implements OnInit {
// Reference for getting this working!! https://embed.plnkr.co/fwWCwmXGXretngESd1WJ/ !!
  totalPeopleArr = [];
  peopleForm: FormGroup
  personForm: FormGroup
  customerCount = 1

  get people() {return this.peopleForm.get('people');}

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {

    this.peopleForm = this.formBuilder.group({
      people: this.formBuilder.array([])
    })

    this.personForm = this.formBuilder.group({
      'name' : new FormControl(null, Validators.required),
      'customerNumber' : new FormControl(null, Validators.min(1))
    })

  }

  addPerson() { // THIS WORKS WITH VALIDATION AT THE MOMENT
    (this.people as FormArray).push(this.formBuilder.group({
      "name": new FormControl(''),
      'customerNumber': new FormControl('', [Validators.min(200), Validators.required])
    }))
  }

  // addPerson() { // THIS DOES NOT WORK WITH VALIDATION AT THE MOMENT
  //   (this.people as FormArray).push(this.personForm)
  // }

  onSubmit() {
    console.log(this.peopleForm.value)
  }

}
