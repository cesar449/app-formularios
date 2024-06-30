import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private router: Router) {}

  onLogin() {
    
    if (this.email === 'orlancesar880@gmail.com' && this.password === '123') {
      this.router.navigate(['/cargar-articulo']);
    } else {
      alert('revisa tu correo o contraseña');
    }
  }
}
