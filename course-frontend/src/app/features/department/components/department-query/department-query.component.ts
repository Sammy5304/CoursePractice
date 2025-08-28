import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Departments } from '../../model/department.model';
import { DepartmentService } from '../../service/department.service';
import { DepartmentQuerylistComponent } from "./department-querylist/department-querylist.component";
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-department-query',
  standalone: true,
  imports: [CommonModule, DepartmentQuerylistComponent, ReactiveFormsModule],
  templateUrl: './department-query.component.html',
  styleUrl: './department-query.component.scss'
})
export class DepartmentQueryComponent {
  deptlist: Departments[] = [];

  isCollapsed: boolean = false;
  isSearched: boolean = false;

  constructor(private router: Router, 
              private departmentService: DepartmentService,
              private fb: FormBuilder
  ) {}

  queryForm!: FormGroup;

  ngOnInit() {
    this.queryForm = this.fb.group({
      code: [''],
      name: [''],
      managerId: [''],
      active: ['']
    });
  }

  onSearch() {
    this.deptlist = this.departmentService.getDepartments(this.queryForm.value);
    this.isSearched = true;
    this.queryForm.reset({
      code: '',
      name: '',
      managerId: '',
      active: ''
    });
  }

  onReset() {
    // Reset back to initial empty-string values (avoid null which breaks filter logic)
    this.queryForm.reset({
      code: '',
      name: '',
      managerId: '',
      active: ''
    });
    this.isSearched = false;
  }

  toggleCollapse() {
    this.isCollapsed = !this.isCollapsed;
  }

  onAdd(): void {
    this.router.navigate(['/main/departments/create']);
  }
}
