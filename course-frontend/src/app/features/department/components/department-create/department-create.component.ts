import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FormBuilder, FormGroup, Validators} from "@angular/forms";
import { Router, RouterLink } from '@angular/router';
import { Departments } from '../../model/department.model';
import { DepartmentService } from '../../service/department.service';

@Component({
  selector: 'app-department-create',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterLink
  ],
  templateUrl: './department-create.component.html',
  styleUrl: './department-create.component.scss'
})
export class DepartmentCreateComponent {

  isEnabled: boolean = true;
  createForm!: FormGroup;

  department: Departments = { level: '', code: '', parentId: '', name: '', managerId: '', active: true };

  constructor(private formBuilder: FormBuilder, 
              private departmentService: DepartmentService,
              private router: Router
  ) {}
  
  onSubmit() {
    this.departmentService.add(this.department);
    this.router.navigate(['/main/departments']);
  }
  
  toggleEnabled(event: Event) {
    const input = event.target as HTMLInputElement;
    this.isEnabled = input.checked;
  }

  ngOnInit(): void {
    this.initializeForm();
  }

  private initializeForm(): void {
    this.createForm = this.formBuilder.group({
      parentDeptId: [null], // 上層部門 (選擇性，根據層級動態調整)
      deptCode: ['', [
        Validators.required,
        Validators.maxLength(20),
        Validators.pattern(/^\w+$/) // 只允許英數字和底線
      ]],
      deptName: ['', [
        Validators.required,
        Validators.maxLength(100)
      ]],
      deptLevel: ['', Validators.required],
      managerEmpId: [''], // 部門主管員工ID (選擇性)
      isActive: [true, Validators.required]
    });
  }

  isFieldInvalid(fieldName: string): boolean {
    const field = this.createForm.get(fieldName);
    return !!(field && field.invalid && (field.dirty || field.touched));
  }

  getFieldError(fieldName: string): string {
    const field = this.createForm.get(fieldName);
    if (field?.errors && (field.dirty || field.touched)) {
      if (field.errors['required']) {
        return `${this.getFieldDisplayName(fieldName)}為必填欄位`;
      }
      if (field.errors['maxlength']) {
        const maxLength = field.errors['maxlength'].requiredLength;
        return `${this.getFieldDisplayName(fieldName)}不能超過 ${maxLength} 個字元`;
      }
      if (field.errors['pattern']) {
        if (fieldName === 'deptCode') {
          return '部門代碼只能包含英數字和底線';
        }
        if (fieldName === 'deptName') {
          return '不能只包含空白字元';
        }
      }
    }
    return '';
  }

  private getFieldDisplayName(fieldName: string): string {
    const labels: { [key: string]: string } = {
      'parentDeptId': '上層部門',
      'deptCode': '部門代碼',
      'deptName': '部門名稱',
      'deptLevel': '部門層級',
      'managerEmpId': '部門主管',
      'isActive': '是否啟用'
    };
    return labels[fieldName] || fieldName;
  }

  onCreateCancel(){
    this.router.navigate(['/main/departments']);
  }

  onReset(){
    this.createForm.reset();
  }
}
