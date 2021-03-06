import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IJobOffer } from '../../../shared/models/job-offer.model';
import { JobService } from '../../../shared/services/job.service';
import { IJob } from '../../../shared/models/job.model';
import { IOfferHrEdit } from '../../../shared/models/hr-offer-edit.model'
import { IApplicationStatus } from '../../../shared/models/application_status.model';
import { ApplicantService } from '../../../shared/services/applicant.service';
import { IEmployeeFromCompany } from '../../../shared/models/IEmployeeFromCompany';
import { EmployeeService } from '../../../shared/services/employee.service';
import { ApplicationService } from '../../../shared/services/application.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-hr-offer-detail',
  templateUrl: './hr-offer-detail.component.html',
  //styleUrls: ['./hr-offer-detail.component.css']
})
export class HrOfferDetailComponent implements OnInit {

  job: IJobOffer
  applicants: IOfferHrEdit[]
  applicationStatus: IApplicationStatus[]
  //status:IApplicationStatus
  employees:IEmployeeFromCompany[]
  applicationStatusOption:FormControl
  recruiterOption:FormControl
  selectedOptions:FormGroup
  selectedRecruiter

  constructor(private jobService: JobService, private router: Router
    , private applicantService: ApplicantService, private employeeService:EmployeeService
    , private applicationService:ApplicationService) { }

  ngOnInit() {
    
    // this.applicationStatusOption = new FormControl()
    // this.recruiterOption = new FormControl()
    // this.selectedOptions = new FormGroup({
    //   applicationStatusOption: this.applicationStatusOption,
    //   recruiterOption: this.recruiterOption

      
    // })

    this.selectedRecruiter = 

    this.jobService.showJobOfferDetail(this.jobService.currentJobId)
      .subscribe((data: IJobOffer) => {
        this.job = data['Data'];
      })


    this.applicantService.offerDetailGetApplicants(this.jobService.currentJobId)
      .subscribe((data: IOfferHrEdit[]) => {
        this.applicants = data['Data'];
      })

    // this.jobService.getAllActiveApplicationStatus()
    //   .subscribe((data: IApplicationStatus[]) => {
    //     this.applicationStatus = data['Data'];
    //   })

      this.employeeService.getActiveCompanyEmployees(this.jobService.currentJobId)
      .subscribe((data: IApplicationStatus[]) => {
        this.employees = data['Data'];
        console.log(this.employees)
      })

  }
  save(applicationId, statusId) {
    console.log("Application id: " + applicationId)
    console.log("Status id: " + statusId)
    //this.applicationService.updateApplicationStatus()
  }

  // getSelectedEmployee(employeeId, applicationemployeeId) {
  //   this.selectedRecruiter = this.employees.filter(
  //     employee => employeeId = applicationemployeeId);
  // }

  // onEmployeeChange(event) {}

}
