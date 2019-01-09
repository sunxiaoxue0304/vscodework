import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
/*
export class AppComponent {
  txt:string;
  counter:number=0;
  arr:Object[]=[];
  fun(e){
    if(e.keyCode==13){
      this.arr.push({title:this.txt,done:false})
      this.txt="";
      this.count();
    }
    
  }
  fun1(idx){
      this.arr[idx].done=!this.arr[idx].done;
      this.count();
  }
  del(idx){
    this.arr.splice(idx,1);
    this.count(); 
  }
  count(){
    this.counter=0;
    this.arr.forEach((value,index)=>{
      if(value.done){
        this.counter++;
      }
    });
  }
 
}
*/
/******************************************************************************* */
/*

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  txt:string;
  counter:number=0;
  arr:Msg[]=[];
  fun(e){
    if(e.keyCode==13){
     this.arr.push(new Msg(this.txt,false)) 
      this.txt="";
      this.count();
    }
    
  }
  fun1(idx){
      this.arr[idx].done=!this.arr[idx].done;
      this.count();
  }
  del(idx){
    this.arr.splice(idx,1);
    this.count(); 
  }
  count(){
    this.counter=0;
    this.arr.forEach((value,index)=>{
      if(value.done){
        this.counter++;
      }
    });
  }
 
}
  export class Msg{
    constructor(public title:string,public done:boolean){}
}
*/
/**************************************************************************************************** */
/*
title:string='angular hello';
   txt:string;
   fun(e){
        if (e.keyCode==13){
          this.arr.unshift(this.txt);
          this.txt="";
        }
   }
  
   arr:string[]=[];
   arr1:string[]=[];
   del(idx){
     this.arr.splice(idx,1);
   }
   del1(idx){
    this.arr1.splice(idx,1);
  }
   fun1(idx){
       this.arr1.unshift(this.arr[idx]);
       this.arr.splice(idx,1);
   }
   fun2(idx){
    this.arr.unshift(this.arr1[idx]);
    this.arr1.splice(idx,1);
    */


    export class AppComponent{}