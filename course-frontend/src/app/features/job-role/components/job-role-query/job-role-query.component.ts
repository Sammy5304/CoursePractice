import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { JobRoles } from '../../model/job-role.model';
import { JobRoleService } from '../../service/job-role.service';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { JobRoleQuerylistComponent } from './job-role-querylist/job-role-querylist.component';

@Component({
  selector: 'app-job-role-query',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, JobRoleQuerylistComponent],
  templateUrl: './job-role-query.component.html',
  styleUrls: ['./job-role-query.component.scss']
})
export class JobRoleQueryComponent {
  jobRoles: JobRoles[] = [];

  // start expanded
  isCollapsed: boolean = false;
  isSearched: boolean = false;

  constructor(private router: Router, 
              private jobRoleService: JobRoleService,
              private fb: FormBuilder
  ) {}

  queryForm!: FormGroup;

  ngOnInit() {
    this.queryForm = this.fb.group({
      code: [''],
      name: [''],
      active: [''],
      createdDateFrom: [''],
      createdDateTo: ['']
    });
  }

  onSearch() {
    this.jobRoles = this.jobRoleService.getJobRoles(this.queryForm.value);
    this.isSearched = true;
    this.queryForm.reset({
      code: '',
      name: '',
      active: '',
      createdDateFrom: '',
      createdDateTo: ''
    });
  }

  onReset() {
    // Reset back to initial empty-string values (avoid null which breaks filter logic)
    this.queryForm.reset({
      code: '',
      name: '',
      active: '',
      createdDateFrom: '',
      createdDateTo: ''
    });
    this.isSearched = false;
  }

  toggleCollapse() {
    this.isCollapsed = !this.isCollapsed;
  }

  onAdd(): void {
    this.router.navigate(['/main/job-roles/create']);
  }
}
