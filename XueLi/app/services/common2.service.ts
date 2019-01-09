import { Injectable } from '@angular/core';
import { CommonService } from './common.service';
import { LogService } from './log.service';

/* @Injectable({
  providedIn: 'root'
}) 名字相同时，不用再去app.model.ts中去配置*/
@Injectable()//这句话表示common2service中可以注入其他服务,如果没有就不可以注入其他服务
export class Common2Service implements CommonService{

  constructor(private log:LogService) { }
  set(key,value){
    this.log.log("set");
    localStorage.setItem(key,value);
  }
  get(key){
    this.log.log("get方法调用了");
    return localStorage.getItem(key);
  }

}
