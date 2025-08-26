import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-job-role-query',
  standalone: true,
  imports: [CommonModule, ],
  templateUrl: './job-role-query.component.html',
  styleUrls: ['./job-role-query.component.scss']
})
export class JobRoleQueryComponent {
  constructor(private router: Router) {}

  // start expanded
  isCollapsed = false;

  toggleCollapse() {
    this.isCollapsed = !this.isCollapsed;
  }

  onAdd(): void {
    this.router.navigate(['/main/job-roles/create']);
  }
}
