import { Component, OnInit } from '@angular/core';
import { StudentService } from './student.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Students App';
  public students: any;

  constructor(private _myService: StudentService) {}

  ngOnInit() {
    this.getStudents();
  }

  getStudents() {
    this._myService.getStudents().subscribe(
      data => {
        this.students = data;
      },
      err => console.error(err),
      () => console.log('finished loading')
    );
  }
}
