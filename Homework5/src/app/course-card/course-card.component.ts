import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Course, svetle} from '../model/course';


@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit{
  constructor(){}

  @Input()
  title:string="";

  @Input()
  indeks:number=0;

  @Input()
  crs:Course = svetle;

  ngOnInit(){

  }

  @Output()
  novo=new EventEmitter<Course>();

  
  onCrsViewed(){
    console.log("bla bla bla bullshit bla bla bla")
    this.novo.emit(this.crs);
  }

  stilovi(){
    if(this.crs.category=="BEGINNER"){
      return{'background-color':'lightgreen'}
    }else if(this.crs.category=="INTERMEDIATE"){
      return{'background-color':'hotpink'}
    }else{
      return{'background-color':'blue'}
    }
  }

}
