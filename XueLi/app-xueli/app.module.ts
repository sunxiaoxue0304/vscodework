import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/child/child.component';
import { CommonService } from 'src/app/services/common.service';
import { Common2Service } from 'src/app/services/common2.service';
import { Child2Component } from './components/child2/child2.component';
import { RouterModule } from '@angular/router';
import { FatherComponent } from 'src/app/toDoLists/father/father.component';
import { InputComponent } from 'src/app/toDoLists/input/input.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { TongbuComponent } from './components/tongbu/tongbu.component';
import { CourseComponent } from './components/course/course.component';
import { ClubComponent } from './components/club/club.component';
import { AppRootingModule } from './/app-rooting.module';
import { HttpClientModule } from '@angular/common/http';
import { TongbudetailComponent } from './components/tongbudetail/tongbudetail.component';
import { CoursedetailComponent } from './components/coursedetail/coursedetail.component';
import { CommunityComponent } from './components/community/community.component';
import { RenwuComponent } from './components/renwu/renwu.component';
import { TbkeComponent } from './components/tbke/tbke.component';
import { KechengComponent } from './components/kecheng/kecheng.component';
import { QieshuoComponent } from './components/qieshuo/qieshuo.component';
import { TongzhiComponent } from './components/tongzhi/tongzhi.component';
import { WeiwanchengComponent } from './components/weiwancheng/weiwancheng.component';
import { YiwanchengComponent } from './components/yiwancheng/yiwancheng.component';
import { YiwanjieComponent } from './components/yiwanjie/yiwanjie.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    Child2Component,
    HeaderComponent,
    HomeComponent,
    TongbuComponent,
    CourseComponent,
    ClubComponent,
    TongbudetailComponent,
    CoursedetailComponent,
    CommunityComponent,
    RenwuComponent,
    TbkeComponent,
    KechengComponent,
    QieshuoComponent,
    TongzhiComponent,
    WeiwanchengComponent,
    YiwanchengComponent,
    YiwanjieComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    
    RouterModule.forRoot([
      {path:'home',component:HomeComponent,children:
      [{path:'renwu',component:RenwuComponent,children:
      [{path:'weiwancheng',component:WeiwanchengComponent},
       {path:'yiwancheng',component:YiwanchengComponent},
       {path:'yiwanjie',component:YiwanjieComponent},
       {path:'',redirectTo:'weiwancheng',pathMatch:"full"}
      ]},
       {path:'tbke',component:TbkeComponent},
       {path:'kecheng',component:KechengComponent},
       {path:'qieshuo',component:QieshuoComponent},
       {path:'tongzhi',component:TongzhiComponent},
       {path:'',redirectTo:'renwu',pathMatch:"full"}
      ]},
      //childen:[{}, {},]},
      {path:'tongbu/:courseId',component:TongbudetailComponent},
      {path:'tongbu',component:TongbuComponent},
      {path:'course',component:CourseComponent},
      {path:'club',component:ClubComponent},
      {path:'course/:classid',component:CoursedetailComponent},
      {path:'club/:clubid',component:CommunityComponent},
      {path:'',redirectTo:'home',pathMatch:"full"},
      {path:'**', component:ClubComponent}
    ]),
    
    AppRootingModule,
    
  ],
  providers: [ CommonService,
    //{provide:CommonService,useClass:CommonService}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
