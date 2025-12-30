import { Component, inject } from '@angular/core';
import { Student, StudentService } from '../../APIES/student-service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';


interface EmployeeForm{
  id: FormControl<string | null>;
  name: FormControl<string | null>;
  phoneno: FormControl<string | null>;
  email: FormControl<string | null>;
  address: FormControl<string | null>;
  gender: FormControl<string | null>;
  
}
@Component({
  selector: 'app-form',
  standalone:true,
  imports: [ReactiveFormsModule],
  templateUrl: './form.html',
  styleUrl: './form.css',
})
export class Form {
  private students=inject(StudentService);
  form = new FormGroup<EmployeeForm>({
    id: new FormControl(null), 
    name: new FormControl(null, Validators.required),
    phoneno: new FormControl(null, [
      Validators.required,
      Validators.pattern('^[6-9]\\d{9}$')
    ]),
    email: new FormControl(null, [
      Validators.required,
      Validators.pattern(/^[a-zA-Z0-9._%+-]+@tag97(\.[a-zA-Z]{2,})?$/)
    ]),
    address: new FormControl(null, Validators.required),
    gender: new FormControl(null, Validators.required),
    
  });

  onsubmit() {
    this.students.getStudents().subscribe((students) => 
      {   
      console.log(students);
    });

    const student: Student = this.form.getRawValue();


    this.students.addStudents(student).subscribe((students) => 
      {   
      console.log(students);
    });
  }
}
