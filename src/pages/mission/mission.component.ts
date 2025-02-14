import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-mission',
  imports: [RouterModule],
  templateUrl: './mission.component.html',
  styleUrl: './mission.component.css'
})
export class MissionComponent {
  constructor(private router: Router) {}
  
    redirectToMission() {
      this.router.navigate(['/mission']);
    }

}
