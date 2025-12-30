import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Form } from "../Share/form/form";
import { Table } from "../Share/table/table";
import { person } from '../interface/interface';

@Component({
  selector: 'app-student',
  imports: [Form, Table],
  templateUrl: './student.html',
  styleUrl: './student.css',
})
export class Student {
  Students:person[]=[];
   private router = inject(Router);

  goToHome() {
    this.router.navigate(['/dashboard']);
  }
}
