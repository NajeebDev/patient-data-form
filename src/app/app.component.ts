import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  formGroup!: FormGroup;
  data: any = '';
  firstError!: string;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.formGroup = this.formBuilder.group({
      title: [''],
      salutation: ['', Validators.maxLength(20)],
      surname: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(50), Validators.pattern(/^[A-Za-z\s]+$/)]],
      first_name: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(40), Validators.pattern(/^[A-Za-z\s]+$/)]],
      dob: ['', Validators.required],
      marital_status: ['unknown'],
      email: ['', [Validators.required, Validators.pattern(/^[\w]{1,}[\w.+-]{0,}@[\w-]{1,}([.][a-zA-Z]{2,}|[.][\w-]{2,}[.][a-zA-Z]{2,})$/)]],
      notes: ['']
    });
  }

  onSubmit(value: any) {
    //this.data = value;
    console.log(value);

  }

  public checkError = (controlName: string, errorName: string) => {
    return this.formGroup.controls[controlName].hasError(errorName);

  }
}

