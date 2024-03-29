import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})

export class EmployeeComponent {

  public dashboardvissible = true;
  // public practicePageVissible = false;
  sidebarOpened = false;


  constructor(private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private toastr: ToastrService){}



    redirect(){
      this.router.navigate(['employee-practice'])
    }
    toggleSidebar() {
      this.sidebarOpened = !this.sidebarOpened;
    }

    public dashboard():void{
      this.dashboardvissible = true;
      
    }

    public practice():void{
      this.router.navigate(['employee-practice'])
    }

    public crashcourse():void{
      this.router.navigate(['employee-crash-course']);

    }

    public recommendations():void{
      this.router.navigate(['employee-recommendations']);

    }
    public logout(): void {
      
          this.router.navigate(['']);
        
    }

}
