import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent {
  adminName: string = 'Admin';
  public HomePageVissible = true;
  public alldata: any;
  public permissionData: any;
  public viewEmployeesVissible = false;
  public AdminForm: FormGroup;
  public grantPermissionsFormVissible = false;
  public grantPermisisonsADashboard = false;
  public employeeStatusDashboardVissible = false;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private toastr: ToastrService
  ) {
    this.AdminForm = this.formBuilder.group({
      username: '',
      readPermission: '',
      writePermission: '',
      appendPermission: '',
      role: '',
    });
  }

  public viewEmployees(): void {
    this.HomePageVissible = false;
    this.viewEmployeesVissible = true;
    this.grantPermissionsFormVissible = false;
    this.grantPermisisonsADashboard = false;
    this.employeeStatusDashboardVissible = false;

    const url = `http://localhost:2000/viewemployees`;

    this.http.get(url, { responseType: 'json' }).subscribe((data) => {
      let finaldata = JSON.stringify(data);
      let obj = JSON.parse(finaldata);
      let result = [];
      for (let i in obj) {
        result.push(obj[i]);
      }
      this.alldata = result;
    });
  }

  public grantPermissionForm(): void {
    this.grantPermisisonsADashboard = false;
    this.grantPermissionsFormVissible = true;
  }

  public GrantPermissionsDashboard(): void {
    this.HomePageVissible = false;
    this.viewEmployeesVissible = false;
    this.grantPermisisonsADashboard = true;
    this.grantPermissionsFormVissible = false;
    this.employeeStatusDashboardVissible = false;
    const url = `http://localhost:2000/viewpermission`;

    this.http.get(url, { responseType: 'json' }).subscribe((data) => {
      let finaldata = JSON.stringify(data);
      let obj = JSON.parse(finaldata);
      let result = [];
      for (let i in obj) {
        result.push(obj[i]);
      }
      this.permissionData = result;
    });
  }

  public goBackToGrantPermission(): void {
    this.grantPermisisonsADashboard = true;
  }

  public grantPermissions(): void {
    this.viewEmployeesVissible = false;
    this.HomePageVissible = false;
    this.grantPermissionsFormVissible = false;
    this.employeeStatusDashboardVissible = false;
    const username = this.AdminForm.controls['username'].value;
    const role = this.AdminForm.controls['role'].value;
    const readPermission = this.AdminForm.controls['readPermission'].value;
    const writePermission = this.AdminForm.controls['writePermission'].value;
    const appendPermission = this.AdminForm.controls['appendPermission'].value;

    const url = `http://localhost:2000/LoginPermission/${username}/${readPermission}/${writePermission}/${appendPermission}/${role}`;

    this.http.get(url, { responseType: 'text' }).subscribe((data) => {
      if (data == 'Permission Updated') {
        this.toastr.success('Permission Updated');
        this.router.navigate(['admin']);
      } else if (data == 'Permission already granted') {
        this.toastr.error('Permission Already Granted');
      } else {
        this.notification('Error', 'Error Occured Try Again !');
      }
    });
  }

  public EmployeeStatus(): void {
    this.employeeStatusDashboardVissible = true;
    this.HomePageVissible = false;
    this.viewEmployeesVissible = false;
    this.grantPermisisonsADashboard = false;
  }

  public logout(): void {
    // Perform other logout logic if needed
    const username = 'Admin'; 
    const url = `http://localhost:2000/logout/${username}`;
    this.http.get(url,{responseType:'text'}).subscribe(data =>{
      if(data=="Logged out successfully"){
        this.toastr.success("Logged Out successfully !")
        // localStorage.removeItem(this.loggedInKey);
        this.router.navigate(['']);
      }
      else {
        this.toastr.error("Try again later!");
      }
    })
  }


  public backToDashboard():void{
    this.HomePageVissible = true;
    this.viewEmployeesVissible = false;
    this.employeeStatusDashboardVissible = false;

  }

  public fromGrantPermissionToHome():void{
    this.HomePageVissible = true;
    this.grantPermisisonsADashboard=false;
    this.employeeStatusDashboardVissible = false;
  }

  // for sweetalert message popups
  public notification(title: string, text: string): void {
    Swal.fire({
      title: title,
      text: text,
    });
  }
}
