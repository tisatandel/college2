import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
export interface teacher{
  id:string |null,
  name:string |null,
  phoneno:string |null,
  email:string |null,
  address:string |null,
  gender:string |null
}

@Injectable({
  providedIn: 'root',
})
export class TeacherService {
  private http=inject(HttpClient);  
}
