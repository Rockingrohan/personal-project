import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-employee',
  templateUrl: './level.component.html',
  styleUrls: ['./level.component.scss']
})
export class LevelComponent {

  public dashboardvissible = false;
  public showLevel_1_Visible = true;
  public showLevel_2_Visible = false;
  public showLevel_3_Visible = false;
  public showLevel_4_Visible = false;
  public showLevel_5_Visible = false;
  sidebarOpened = false;

  // level 1 topics
  public L1T1Vissible = false;
  public L1T2Vissible = false;
  public L1T3Vissible = false;
  public L1T4Vissible = false;
  public L1T5Vissible = false;

  // Level 2 topics
  public L2T1Vissible = false;
  public L2T2Vissible = false;
  public L2T3Vissible = false;
  public L2T4Vissible = false;
  public L2T5Vissible = false;

  // Level 3 Topics 
  public L3T1Vissible = false;
  public L3T2Vissible = false;
  public L3T3Vissible = false;
  public L3T4Vissible = false;
  public L3T5Vissible = false;

  // Level 4 topics 
  public L4T1Vissible = false;
  public L4T2Vissible = false;
  public L4T3Vissible = false;
  public L4T4Vissible = false;
  public L4T5Vissible = false;

  // Level 5 topics 
  public L5T1Vissible = false;
  public L5T2Vissible = false;
  public L5T3Vissible = false;
  public L5T4Vissible = false;
  public L5T5Vissible = false;

  constructor(private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private toastr: ToastrService){}




    
    toggleSidebar() {
      this.sidebarOpened = !this.sidebarOpened;
    }

    showLevel(level: number) {
      this.dashboardvissible = false;
    
      switch (level) {
        case 1:
          this.showLevel_1_Visible = true;
          break;
        case 2:
          this.showLevel_2_Visible = true;
          break;
        case 3:
          this.showLevel_3_Visible = true;
          break;
        case 4:
          this.showLevel_4_Visible = true;
          break;
        case 5:
          this.showLevel_5_Visible = true;
          break;
        default:
          break;
      }
    }
    
    public practice_dashboard(): void {
      
      this.dashboardvissible = true;
      this.showLevel_1_Visible = false;
      this.showLevel_2_Visible = false;
      this.showLevel_3_Visible = false;
      this.showLevel_4_Visible = false;
      this.showLevel_5_Visible = false;
      this.sidebarOpened = false; 
      this.L1T1Vissible = false;
      this.L1T2Vissible = false;
      this.L1T3Vissible = false;
      this.L1T4Vissible = false;
      this.L1T5Vissible = false;

      this.L2T1Vissible = false;
      this.L2T2Vissible = false;
      this.L2T3Vissible = false;
      this.L2T4Vissible = false;
      this.L2T5Vissible = false;

      this.L3T1Vissible = false;
      this.L3T2Vissible = false;
      this.L3T3Vissible = false;
      this.L3T4Vissible = false;
      this.L3T5Vissible = false;

    }




// Open Level 1
    public openL1Topic(topicNumber: number): void {
      switch (topicNumber) {
        case 1:
          this.L1T1Vissible = true;
          this.showLevel_1_Visible = false;
          this.L1T2Vissible = false;
          this.L1T3Vissible = false;
          this.L1T4Vissible = false;
          this.L1T5Vissible = false;
          break;
        case 2:
          this.L1T1Vissible = false;
          this.showLevel_1_Visible = false;
          this.L1T2Vissible = true;
          this.L1T3Vissible = false;
          this.L1T4Vissible = false;
          this.L1T5Vissible = false;
          break;
        case 3:
          this.L1T1Vissible = false;
          this.showLevel_1_Visible = false;
          this.L1T2Vissible = false;
          this.L1T3Vissible = true;
          this.L1T4Vissible = false;
          this.L1T5Vissible = false;
          break;
        case 4:
          this.L1T1Vissible = false;
          this.showLevel_1_Visible = false;
          this.L1T2Vissible = false;
          this.L1T3Vissible = false;
          this.L1T4Vissible = true;
          this.L1T5Vissible = false;
          break;
        case 5:
          this.L1T1Vissible = false;
          this.showLevel_1_Visible = false;
          this.L1T2Vissible = false;
          this.L1T3Vissible = false;
          this.L1T4Vissible = false;
          this.L1T5Vissible = true;
          break;
        default:
          break;
      }
    }


    // Level 2 
    public openL2Topic(topicNumber: number): void {
      switch (topicNumber) {
        case 1:
          this.L2T1Vissible = true;
          this.showLevel_2_Visible = false;
          this.L2T2Vissible = false;
          this.L2T3Vissible = false;
          this.L2T4Vissible = false;
          this.L2T5Vissible = false;
          break;
        case 2:
          this.L2T1Vissible = false;
          this.showLevel_2_Visible = false;
          this.L2T2Vissible = true;
          this.L2T3Vissible = false;
          this.L2T4Vissible = false;
          this.L2T5Vissible = false;
          break;
        case 3:
          this.L2T1Vissible = false;
          this.showLevel_2_Visible = false;
          this.L2T2Vissible = false;
          this.L2T3Vissible = true;
          this.L2T4Vissible = false;
          this.L2T5Vissible = false;
          break;
        case 4:
          this.L2T1Vissible = false;
          this.showLevel_2_Visible = false;
          this.L2T2Vissible = false;
          this.L2T3Vissible = false;
          this.L2T4Vissible = true;
          this.L2T5Vissible = false;
          break;
        case 5:
          this.L2T1Vissible = false;
          this.showLevel_2_Visible = false;
          this.L2T2Vissible = false;
          this.L2T3Vissible = false;
          this.L2T4Vissible = false;
          this.L2T5Vissible = true;
          break;
        default:
          break;
      }
    }

// Level 3 
public openL3Topic(topicNumber: number): void {
  switch (topicNumber) {
    case 1:
      this.L3T1Vissible = true;
      this.showLevel_3_Visible = false;
      this.L3T2Vissible = false;
      this.L3T3Vissible = false;
      this.L3T4Vissible = false;
      this.L3T5Vissible = false;
      break;
    case 2:
      this.L3T1Vissible = false;
      this.showLevel_3_Visible = false;
      this.L3T2Vissible = true;
      this.L3T3Vissible = false;
      this.L3T4Vissible = false;
      this.L3T5Vissible = false;
      break;
    case 3:
      this.L3T1Vissible = false;
      this.showLevel_3_Visible = false;
      this.L3T2Vissible = false;
      this.L3T3Vissible = true;
      this.L3T4Vissible = false;
      this.L3T5Vissible = false;
      break;
    case 4:
      this.L3T1Vissible = false;
      this.showLevel_3_Visible = false;
      this.L3T2Vissible = false;
      this.L3T3Vissible = false;
      this.L3T4Vissible = true;
      this.L3T5Vissible = false;
      break;
    case 5:
      this.L3T1Vissible = false;
      this.showLevel_3_Visible = false;
      this.L3T2Vissible = false;
      this.L3T3Vissible = false;
      this.L3T4Vissible = false;
      this.L3T5Vissible = true;
      break;
    default:
      break;
  }
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
