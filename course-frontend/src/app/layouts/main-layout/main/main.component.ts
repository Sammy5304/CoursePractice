import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarmanuComponent } from "../sidebarmanu/sidebarmanu.component";

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule, RouterOutlet, SidebarmanuComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent implements OnInit{

  currentDate = new Date();
  currentTime = new Date();

  // track whether sidebar is open; used by template and passed to child
  sidebarOpen: boolean = true;

  ngOnInit() {
    setInterval(() => {
      this.currentTime = new Date();
    }, 1000); // Update every second
  }

  toggleSidebar(){
    this.sidebarOpen = !this.sidebarOpen;
  }


}
