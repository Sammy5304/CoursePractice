import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { JobRoles } from '../../../model/job-role.model';

@Component({
  selector: 'app-job-role-querylist',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './job-role-querylist.component.html',
  styleUrl: './job-role-querylist.component.scss'
})
export class JobRoleQuerylistComponent {
  @Input({ required: true }) jobrolelist: JobRoles[] = [];
}
