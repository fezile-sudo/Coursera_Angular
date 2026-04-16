import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Feedback, ContactType } from '../shared/feedback';
import { MatFormFieldModule } from '@angular/material/form-field';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    MatFormFieldModule,
    JsonPipe
  ],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
    
  feedbackForm!: FormGroup;
  feedback!: Feedback;
  contactType = ContactType;

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    this.feedbackForm = this.fb.group({
      firstname: '',
      lastname: '',
      telnum: 0,
      email: '',
      agree: false,
      contacttype: 'None',
      message: ''
    });
  }

  onSubmit() {
    this.feedback = this.feedbackForm.value;
    console.log(this.feedback);
    this.feedbackForm.reset();
  }
}
