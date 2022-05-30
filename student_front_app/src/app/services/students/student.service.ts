import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Student } from 'src/app/models/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http : HttpClient) { }

  getStudents(){
    return this.http.get<Student[]>('http://localhost:3000/api/students').toPromise();
  }
}
