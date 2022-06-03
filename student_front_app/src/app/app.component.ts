import { Component } from '@angular/core';
import { AuthService } from './services/security/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'student_front_app';
  constructor(public authService: AuthService) { }
  logout() {
    this.authService.doLogout()
  }
}
