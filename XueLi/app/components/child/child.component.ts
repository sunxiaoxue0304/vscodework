import { Component, OnInit,Input,Output,EventEmitter,SimpleChanges } from '@angular/core';
import { ShareService } from '../../services/share.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
 // @Input() arr;
 // @Input() arr1;
  // @Input() arr1;
 /*  @Output() delIndex=new EventEmitter();
  del(i){
      this.delIndex.emit(i);
  } */

  index=0;
  /*
  log(msg){
    console.log(`这是${this.index++}次调用,调用的钩子函数是${msg}`);
  } */

  constructor(private share:ShareService) { 
  
   //this.log("constructor");
   //console.log(this.arr);
  } 
  ngOnChanges(changes:SimpleChanges):void{
    //console.log(changes);
    // for(let item in changes){
    //   console.log(changes[item].currentValue);
    // }
    /* for(let item in changes){
      console.log(changes[item].currentValue);
      for (let i in changes[item]){
        console.log(`属性名是${i},属性值是${changes[item][i]}`)
      }
    }
      this.log("ngOnChangeS"); */
  }
  //msg;
  arr;
  ngOnInit() {
    this.arr=this.share.data;
    //this.arr=this.shar.data;数据共享
   // this.log("ngOnInit");
    //console.log(this.arr);
    //this.msg=ajax();数据初始化
  }
  ngDoCheck():void{
   // this.log("ngDoCheck");
  }
  ngAfterContentInit():void{
   // this.log("ngAfterContentInit");
  }
  ngAfterContentChecked(){
   // this.log("ngAfterContentChecked");
  }
  ngAfterViewChecked(){
   // this.log("ngAfterViewChecked");
  }

}
