import { Component, OnInit,Input, Output,EventEmitter} from '@angular/core';
import { CommonService } from '../../services/common.service';
import { ShareService } from '../../services/share.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
  //providers:[CommonService]优先找到当前的组件，如果当前组件没有，就向上一级，去模块中找
})
export class ParentComponent implements OnInit {
  //private local=new CommonService();//外部实例化
  data=[];
  data1=[3,4];
  constructor(private share:ShareService,private local:CommonService) {
    
  }//内部实例化，只是告诉一个名字，找到对应的名字
  add(){
    this.share.add(100);
  }
 /* del(i){
    console.log(i);
    this.data.splice(i,1); 
    this.local.set("list",this.data);
  } */
  ngOnInit() {
      /* setTimeout(()=>{
        this.data=this.data1;
      },3000) */
      //this.local.set("name","liu");
      /* if(this.local.get("list")){
        this.data=this.local.get("list").split("");
      }else{
        this.data=[1,2,3,4];
      } */
      
  }

}
