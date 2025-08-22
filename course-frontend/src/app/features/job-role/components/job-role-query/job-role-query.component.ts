import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-job-role-query',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './job-role-query.component.html',
  styleUrl: './job-role-query.component.scss'
})
export class JobRoleQueryComponent {

  // start expanded
  isCollapsed = false;

  toggleCollapse() {
    this.isCollapsed = !this.isCollapsed;
  }

}
