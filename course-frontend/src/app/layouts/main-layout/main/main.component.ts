import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent implements OnInit{
  collapsedModules: boolean[] = [];
  
  currentDate = new Date();
  currentTime = new Date();

  sidebarOpen = true;

  ngOnInit() {
    setInterval(() => {
      this.currentTime = new Date();
    }, 1000); // Update every second
  }

  toggleSidebar(){
    this.sidebarOpen = !this.sidebarOpen;
  }

  toggleModule(index: number) {
    this.collapsedModules[index] = !this.collapsedModules[index];
  }
}
