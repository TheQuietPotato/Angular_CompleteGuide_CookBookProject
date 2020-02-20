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
  customerCount = 1

  get people() {return this.peopleForm.get('people');}

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {

    this.peopleForm = this.formBuilder.group({
      people: this.formBuilder.array([])
    })

  }

  addPerson() {
    (this.people as FormArray).push(this.formBuilder.group({
      "name": new FormControl(''),
      'customerNumber': new FormControl('', [Validators.min(200), Validators.required])
    }))
  }

  onSubmit() {
    console.log(this.peopleForm.value)
  }

}
