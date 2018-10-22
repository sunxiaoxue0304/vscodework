import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-community',
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.css']
})
export class CommunityComponent implements OnInit {

  constructor(private router:ActivatedRoute,private http:HttpClient) { }
  clubid:number;
  community;
  ngOnInit() {
    this.clubid = this.router.snapshot.params['clubid'];
    this.http.get('/api/community/'+this.clubid).subscribe(data=>{
      this. community= data;
      console.log(data);
    })
  }

}
