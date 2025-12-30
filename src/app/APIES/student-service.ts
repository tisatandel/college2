import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

// Student interface
export interface Student {
  id: string | null;
  name: string | null;
  phoneno: string | null;
  email: string | null;
  address: string | null;
  gender: string | null;
}

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  private http = inject(HttpClient);

  private api = "http://localhost:3000/students";


  getStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(`${this.api}`);
  }
   
  addStudents(student: Student): Observable<Student> {
    return this.http.post<Student>(`${this.api}`, student);
  }
  }