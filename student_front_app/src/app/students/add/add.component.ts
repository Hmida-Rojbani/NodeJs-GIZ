import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { ClassRoom } from 'src/app/models/class-room';
import { StudentReq } from 'src/app/models/student-req';
import { ClassRoomService } from 'src/app/services/class-room.service';
import { StudentService } from 'src/app/services/students/student.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  addStudentForm: FormGroup;
  isSubmitted = false;
  classes:ClassRoom[]=[];
  constructor(private formBuilder: FormBuilder, 
    private classRoomService:ClassRoomService,
    private studentService: StudentService,
    private router: Router) {
    this.addStudentForm= this.formBuilder.group({
      name: [''],
      age: [''],
      class_id: ['',[Validators.required]],
      adress_number: [''],
      adress_street:[''],
      adress_city:['']
    })
   }

  ngOnInit(): void {
    this.loadClassNames();
  }

  async sendStudent(){
    console.log('Form obj',this.addStudentForm);
    this.isSubmitted = true;
    if (!this.addStudentForm.valid) {
      false;
    } else {
      console.log(JSON.stringify(this.addStudentForm.value));
      let studentReq = new StudentReq(this.addStudentForm.value.name,this.addStudentForm.value.age,this.addStudentForm.value.class_id,this.addStudentForm.value.adress_number,this.addStudentForm.value.adress_street,this.addStudentForm.value.adress_city);
      let student = await this.studentService.addStudent(studentReq);
      console.log('Student add response :',student);
      this.router.navigate(['students','display']);
    }
  }

  async loadClassNames(){
    let classes = await this.classRoomService.getClassesNames();
    if(classes)
      this.classes=classes;
  }

  changeClass(e: any) {
    this.classId?.setValue(e.target.value, {
      onlySelf: true,
    });
    
  }

  // Access formcontrols getter
  get classId() {
    return this.addStudentForm.get('class_id');
  }


}
