import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  public ContactUsForm:FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private toastr: ToastrService
  ) {
    this.ContactUsForm = this.formBuilder.group({
      name:"",
      email:"",
      message:"",
    });
  }

  public ContactUs():void {
    const name = this.ContactUsForm.controls["name"].value;
    const email = this.ContactUsForm.controls["email"].value;
    const message = this.ContactUsForm.controls["message"].value;

    const url = `http://localhost:2000/contactus/${name}/${email}/${message}`;  

    this.http.get(url,{responseType:"text"}).subscribe(data=>{
      if(data=="Thank You for contacting us !"){
        this.notification("Sucess","Message was sent !");
      }
      else{
        this.toastr.error("Something went wrong, please try again");
      }
    })
  }
  public navigateToHome():void{
    this.router.navigate(['/']);
  }

  public notification(title: string, text: string): void {
    Swal.fire({
      title: title,
      text: text
    });
  }
}
