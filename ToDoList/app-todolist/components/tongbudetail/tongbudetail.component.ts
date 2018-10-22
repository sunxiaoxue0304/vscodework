import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { filter,map } from 'rxjs/operators';

@Component({
  selector: 'app-tongbudetail',
  templateUrl: './tongbudetail.component.html',
  styleUrls: ['./tongbudetail.component.css']
})
export class TongbudetailComponent implements OnInit {

  constructor(private router:ActivatedRoute,private http:HttpClient) { }
  courseid:number;
  course;
  flag:boolean=false;
  num=3;
  change(event){
    //console.log(event);
    this.num = event.target.value; 
  }
  ngOnInit() {
    this.courseid = this.router.snapshot.params['courseId'];
    this.http.get('/api/courses/'+this.courseid).
    /*pipe(map(data=>{
      data.name = 'haha';
      return data;
    })).pipe(filter(data=>{
      return data.id == 2;
    })).
    */subscribe(data=>{
      //console.log(data);
      this.course = data;
    })
  }

}
