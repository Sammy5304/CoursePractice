import { Component, Input } from '@angular/core';
import { Departments } from '../../../model/department.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-department-querylist',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './department-querylist.component.html',
  styleUrl: './department-querylist.component.scss'
})
export class DepartmentQuerylistComponent {
  @Input({ required: true }) deptlist: Departments[] = [];
}
