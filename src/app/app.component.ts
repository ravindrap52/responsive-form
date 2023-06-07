import { Component, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { addClass, hasClass, removeClass } from './utils/toggle-class/dom';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public userCheckinDetails: any;
  public togglePersonnelInfo: boolean = true;
  public toggleAddressInfo: boolean = true;
  public toggleCardInfo: boolean = true;
  public submitted: boolean = false;
  constructor(
    private elementRef: ElementRef,
    private formBuilder: FormBuilder,
  ) {
    this.elementRef = elementRef;
  }
  ngOnInit(): void {
    this.userCheckinDetails = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      street: ['', Validators.required],
      houseNumber: ['', Validators.required],
      zipCode: ['', Validators.required],
      city: ['', Validators.required],
      country: ['', Validators.required],
      cardNumber: ['', Validators.required],
      cardHolderName: ['', Validators.required],
      expiryDate: ['', Validators.required],
      cvv: ['', Validators.required],
    });
  }
  get userCheckingFormControl() {
    return this.userCheckinDetails.controls;
  }
  toggleInfo() {
    this.togglePersonnelInfo = !this.togglePersonnelInfo;
  }
  toggleAddress() {
    this.toggleAddressInfo = !this.toggleAddressInfo;
  }
  toggleCard() {
    this.toggleCardInfo = !this.toggleCardInfo;
  }
  onSubmit() {
    if(this.userCheckinDetails.valid) {
      this.submitted = true;
      alert('form submitted successfully')
    } else {
      alert('please fill the form');
    }
  }
}
