import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Store, select } from '@ngrx/store'

import { Observable } from 'rxjs'
import { registerAction } from 'src/app/auth/store/actions'
import { isSubmittingSelector } from 'src/app/auth/store/selectors'
import { AuthService } from 'src/app/auth/services/auth.service'
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  form!: FormGroup;
  isSubmitting$?: Observable<boolean>;
  constructor(private fb: FormBuilder, private store: Store, private authService: AuthService) {}

  ngOnInit(): void {
    this.initializeForm();
    this.initializeValues();
  }

  initializeValues(): void {
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector));
  }

  initializeForm(): void {
    this.form = this.fb.group({
      userName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  onSubmit(): void {
    console.log(this.form.valid)
    this.store.dispatch(registerAction(this.form.value))
    this.authService.register(this.form.value).subscribe
  }

  get userName() {
    return this.form.get('userName');
  }

  get email() {
    return this.form.get('email');
  }
}
