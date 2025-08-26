import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sidebarmanu',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './sidebarmanu.component.html',
  styleUrl: './sidebarmanu.component.scss'
})
export class SidebarmanuComponent {
  @Input({required: true}) sidebarOpen?: boolean;

  collapsedModules: boolean[] = [];

  toggleModule(index: number) {
    this.collapsedModules[index] = !this.collapsedModules[index];
  }
}
