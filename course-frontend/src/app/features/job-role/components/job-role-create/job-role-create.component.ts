import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FormBuilder, FormGroup, Validators} from "@angular/forms";
import { JobRoleService } from '../../service/job-role.service';
import { Router, RouterLink } from '@angular/router';
import { JobRoles } from '../../model/job-role.model';

@Component({
  selector: 'app-job-role-create',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    RouterLink
  ],
  templateUrl: './job-role-create.component.html',
  styleUrls: ['./job-role-create.component.scss']
})
export class JobRoleCreateComponent implements OnInit {
  isEnabled: boolean = true;
  createForm!: FormGroup;

  jobRoles: JobRoles = { code: '', name: '', description: '', active: false };

  toggleEnabled(event: Event) {
    const input = event.target as HTMLInputElement;
    this.isEnabled = input.checked;
  }

  onSubmit() {
    this.jobRoleService.add(this.jobRoles);
    this.router.navigate(['/main/job-roles']);
  }

  constructor(private formBuilder: FormBuilder, 
              private jobRoleService: JobRoleService,
              private router: Router
  ) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  private initializeForm(): void {
    this.createForm = this.formBuilder.group({
      jobRoleCode: ['', [
          Validators.required,
          Validators.pattern(/^[A-Z0-9_]{2,20}$/),
          Validators.maxLength(20)
      ]],
      jobRoleName: ['', [
          Validators.required,
          Validators.maxLength(100),
          Validators.minLength(2)
      ]],
      description: ['', [
          Validators.maxLength(500)
      ]],
      isActive: [true, [Validators.required]]
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
          return this.getFieldDisplayName(fieldName) + '為必填欄位';
      }
      if (field.errors['pattern']) {
          if (fieldName === 'jobRoleCode') {
              return '職務代碼只能包含大寫英文、數字和底線，長度2-20字元';
          }
          return this.getFieldDisplayName(fieldName) + '格式不正確';
      }
      if (field.errors['maxlength']) {
          return this.getFieldDisplayName(fieldName) + '長度超過限制';
      }
      if (field.errors['minlength']) {
          return this.getFieldDisplayName(fieldName) + '長度不足';
      }
    }
    return '';
  }

  private getFieldDisplayName(fieldName: string): string {
    const fieldNames: { [key: string]: string } = {
        jobRoleCode: '職務代碼',
        jobRoleName: '職務名稱',
        description: '備註說明',
        isActive: '是否啟用'
    };
    return fieldNames[fieldName] || fieldName;
  }

  onCreateCancel(){
    this.router.navigate(['/main/job-roles']);
  }

  onReset(){
    this.createForm.reset();
  }
}
