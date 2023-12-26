import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.scss']
})
export class ForgetpasswordComponent {

  public forgotPasswordForm!:FormGroup;
  

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private toastr: ToastrService
  ){
    this.forgotPasswordForm = this.formBuilder.group({
      username:'',
      role:'',
      newpassword:'',
      confirmpassword:''
    })
  }

  public forgotPassword():void{
    const username = this.forgotPasswordForm.controls["username"].value;
    const role = this.forgotPasswordForm.controls["role"].value;
    const newpassword = this.forgotPasswordForm.controls["newpassword"].value;
    const confirmpassword = this.forgotPasswordForm.controls["confirmpassword"].value;

    const url =`http://localhost:2000/forgotpassword/${username}/${role}/${newpassword}/${confirmpassword}`

    this.http.get(url,{responseType:"text"}).subscribe(data=>{
      if(data=="Password updated"){
        this.notification("Success","Password updated");
        this.router.navigate(['login'])
      }
      else if(data=="Username not found"){
        this.toastr.error("Username not found");
      }
      else if(data=="Invalid role"){
        this.toastr.error("Invalid role");
      }
      else if(data=="Invalid password"){
        this.toastr.error("Invalid password");
      }
      else if(data=="Passwords do not match"){
        this.toastr.error("Passwords do not match");
      }
      else if(data=="Role does not match with the username"){
        this.toastr.error("Role does not match with the username");
      }
      else if(data=="Internal Server Error"){
        this.toastr.error("Internal Server Error");
      }
      else {
        this.toastr.error("Something went wrong,Please check the entered details");
      }
    })
  }

  public navigateToHome():void{
    this.router.navigate(['/']);
  }

  public gotologin():void{
    this.router.navigate(['login']);
  }


  public notification(title: string, text: string): void {
    Swal.fire({
      title: title,
      text: text
    });
  }

}
