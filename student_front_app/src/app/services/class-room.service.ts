import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ClassRoom } from '../models/class-room';

@Injectable({
  providedIn: 'root'
})
export class ClassRoomService {

  constructor(private http : HttpClient) { }

  getClassesNames(){
    return this.http.get<ClassRoom[]>('http://localhost:3000/api/classrooms/names').toPromise();
  }
}
