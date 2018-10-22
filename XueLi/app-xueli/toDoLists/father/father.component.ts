import { Component, OnInit,Input, Output,EventEmitter } from '@angular/core';
import { CommonService } from '../../services/common.service';

@Component({
  selector: 'app-father',
  templateUrl: './father.component.html',
  styleUrls: ['./father.component.css']
})
export class FatherComponent implements OnInit {

  constructor() { }
  data:string[]=[];
  data1:string[]=[];
  change(val){
    this.data.push(val);
  }
  ngOnInit() {
  }

}
