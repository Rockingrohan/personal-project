import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  public signupForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private toastr: ToastrService
  ) {
    this.signupForm = this.formBuilder.group({
      username: ['', Validators.required],
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(5)]],
      role: ['', Validators.required]
    });
  }

  public SignupAccount(): void {
    if (this.signupForm.invalid) {
      this.toastr.warning('Please fill out all required fields.');
      return;
    }

    const username = this.signupForm.controls["username"].value;
    const name = this.signupForm.controls["name"].value;
    const email = this.signupForm.controls["email"].value;
    const password = this.signupForm.controls["password"].value;
    const role = this.signupForm.controls["role"].value;

    const url = `http://localhost:2000/Signup/${username}/${name}/${email}/${password}/${role}`;
    this.http.get(url, { responseType: 'text' }).subscribe(data => {
      if (data === 'Account Created Successfully') {
        this.notification("Success", "Account created successfully");
        this.router.navigate(['login']);
      } else if (data === 'Account Already Exists') {
        this.toastr.error("Username already exists");
      } else {
        this.toastr.warning('Something went wrong!');
      }
    });
  }

// to redirect to the login page 
public goToLogin():void{
  this.router.navigate(['login']);

}

// for sweetalert message popups
  public notification(title: string, text: string): void {
    Swal.fire({
      title: title,
      text: text
    });
  }
}
