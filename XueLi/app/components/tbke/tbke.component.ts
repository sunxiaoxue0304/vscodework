import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tbke',
  templateUrl: './tbke.component.html',
  styleUrls: ['./tbke.component.css']
})
export class TbkeComponent implements OnInit {

  constructor(private router:ActivatedRoute,private route:Router,private http:HttpClient) { }
  joinid:number;
  myjoin;
  ngOnInit() {
    this.http.get('/api/myjoin').subscribe((data)=>{
      this.myjoin = data;
    })
  }

}
