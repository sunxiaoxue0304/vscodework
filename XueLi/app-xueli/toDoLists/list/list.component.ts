import { Component, OnInit,Input,Output,EventEmitter,SimpleChanges } from '@angular/core';
import { CommonService } from '../../services/common.service';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private local:CommonService) { }
  @Input() arr;
  @Input() arr1;
  del(idx){
    this.arr.splice(idx,1);
    //this.local.set("list1",this.arr);
  }
  del1(idx){
    this.arr1.splice(idx,1);
   //this.local.set("list2",this.arr1);
  }
   fun1(idx){
       this.arr1.unshift(this.arr[idx]);
       this.arr.splice(idx,1);
   }
   fun2(idx){
    this.arr.unshift(this.arr1[idx]);
    this.arr1.splice(idx,1);}
  ngOnInit() {
    /* if(this.local.get("list")){
      this.arr=this.local.get("list1").split(" ");
      this.arr1=this.local.get("list2").split(" ");
    }
    else{
    this.arr=[];
    this.arr1=[];
    } */
  }
     
  

}
