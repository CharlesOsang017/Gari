import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BackendApiService } from '../services/backend-api.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  submitted = false;
  registerForm: FormGroup;
  alertService: any;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authenticationService: BackendApiService,
    // private BackendApiService: BackendApiService,
  ) {
    //   if (this.authenticationService.isLoggedIn()) {
    //     this.router.navigate(['/']);
    // }
  }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      // password2: ['', [Validators.required, Validators.minLength(6)]]
    });
  }
  get f() { return this.registerForm.controls; }
  onSubmit() {
    this.submitted = true;

    // reset alerts on submit
    // this.alertService.clear();

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }

    // this.loading = true;
    this.authenticationService.register(this.registerForm.value)
      .pipe(first())
      .subscribe(
        data => {
          // this.alertService.success('Registration successful', true);
          console.log(data)
          this.router.navigate(['/login/']);
        },
        error => {
          // this.alertService.error(error);
          // this.loading = false;
        });
  }
}
