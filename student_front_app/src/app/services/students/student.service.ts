import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Student } from 'src/app/models/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private BASE_URL = "http://localhost:3000";

  constructor(private http : HttpClient) { }

  getStudents(){
    return this.http.get<Student[]>(this.BASE_URL+'/api/students').toPromise();
  }

  addStudent(student:any){
    return this.http.post<Student>(this.BASE_URL+'/api/students',student).toPromise();
  }
}
