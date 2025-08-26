import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-employee-query',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './employee-query.component.html',
  styleUrl: './employee-query.component.scss'
})
export class EmployeeQueryComponent {
  // start expanded
  isCollapsed = false;

  toggleCollapse() {
    this.isCollapsed = !this.isCollapsed;
  }
}
