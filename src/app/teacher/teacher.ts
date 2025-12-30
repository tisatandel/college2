import { Component, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { Form } from '../Share/form/form';

@Component({
  selector: 'app-teacher',
  imports: [Form],
  templateUrl: './teacher.html',
  styleUrl: './teacher.css',
})
export class Teacher {
   private router = inject(Router);
  goToHome() {
    this.router.navigate(['/dashboard']);
  }
}
