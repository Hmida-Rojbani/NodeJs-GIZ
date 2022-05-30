import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/models/student';
import { StudentService } from 'src/app/services/students/student.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  constructor(private studentService:StudentService) { }

  students : Student[] = [];
  ngOnInit(): void {
    this.getStudents();
  }

  async getStudents(){
    let students = await this.studentService.getStudents();
    console.log("students ",students);
    if(students)
      this.students = students;
  }

}
