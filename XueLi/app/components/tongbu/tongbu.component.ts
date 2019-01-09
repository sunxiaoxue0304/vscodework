import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tongbu',
  templateUrl: './tongbu.component.html',
  styleUrls: ['./tongbu.component.css']
})
export class TongbuComponent implements OnInit {

  constructor(private router:ActivatedRoute,private route:Router,private http:HttpClient) { }
  courseId:number;
  courses;
  ngOnInit() {
    this.http.get('/api/courses').subscribe((data)=>{
      this.courses = data;
    })
  } 
  /*
    this.courseId = this.router.snapshot.params['courseId'];
    this.router.params.subscribe((params)=>{
      this.courseId = params['courseId']
  go(){
    this.route.navigate(['/club']);
    this.route.navigate(['/tongbu',600],{queryParams:{id:100}});
  }
  */ 
}
