import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-coursedetail',
  templateUrl: './coursedetail.component.html',
  styleUrls: ['./coursedetail.component.css']
})
export class CoursedetailComponent implements OnInit {

  constructor(private router:ActivatedRoute,private http:HttpClient) { }
  // classid:number;
  // class;
  // flag:boolean=false;
  // ngOnInit() {
  //   this.classid = this.router.snapshot.params['classid'];
  //   this.http.get('/api/classes/'+this.classid).subscribe(data=>{
  //     console.log(data);
  //     this.class = data;
  //   })
  // }
  classid:number;
  classes;
  ngOnInit(){
    this.classid = this.router.snapshot.params['classid'];
    this.http.get('/api/classes/'+this.classid).subscribe(data=>{
      this. classes= data;
      console.log(data);
    })
  }
}
