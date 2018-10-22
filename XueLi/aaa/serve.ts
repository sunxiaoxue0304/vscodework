import express from 'express';
import bodyParser from 'body-parser';

const app = express();
app.use(bodyParser.json());

export class Course{
    constructor(
        public id:number,
        public courseName:string,
        public images:string,
        public detail:string,
        public task:number,
        public person:number
        
    ){}
}

const courses = [
    new Course(1,'2016级混合应用开发',
    "http://usercontent.edu2act.cn/media/team/18-09-18/VE66xjRaii5X8Y9qFZQLZC.jpg?imageView2/1/w/230/h/130",
    "",10,90),
    new Course(2,'2016级HTML与CSS基础',
    "http://usercontent.edu2act.cn/media/team/18-09-11/B32yP44hiothFxyegigXe7.jpg?imageView2/1/w/230/h/130",
    "本课程主要学习HTML5的新特性、CSS3的新特性以及前端开发框架Bootstrap。",25,110),
    new Course(3,'2017级软件测试基础',
    "http://usercontent.edu2act.cn/media/team/18-09-09/jHw7UZ9hmNxJtTgCDuf9c3.jpg?imageView2/1/w/230/h/130",
    "该课程包含：测试基础知识复习和实操，探索式测试，敏捷测试，Web安全测试四部分。",20,100),
    new Course(4,'2018级计算机导论',
    "http://usercontent.edu2act.cn/media/team/18-09-06/HUcdGNR48SfNpHPRjGQqXb.jpg?imageView2/1/w/230/h/130",
    "计算机导论课程讲授计算机运行大概过程、简单数值数据在计算机中的表示、计算机硬件的基本组成以及计算机软件的相关知识。",30,98),
    new Course(5,'2018级信息素养实践',
    "http://usercontent.edu2act.cn/media/team/18-09-06/UTjLGPA9oHaKeHMLi9Ko4c.jpg?imageView2/1/w/230/h/130",
    "",5,89),
    new Course(6,'2016级数据结构',
    "http://usercontent.edu2act.cn/media/team/18-09-06/bE6jL98kCfWg3Hij6gyokN.jpg?imageView2/1/w/230/h/130",
    "在计算机科学中，数据结构是一门研究非数值计算的程序设计问题中计算机的操作对象（数据元素）以及它们之间的关系和运算等的学科，而且确保经过这些运算后所得到的新结构仍然是原来的结构类型。",3,401),
    new Course(7,'软件学院18级新生训练营',
    "http://usercontent.edu2act.cn/media/team/18-07-09/3ydhisn3DM8PR9hNY9vCjA.jpg?imageView2/1/w/230/h/130",
    "本课程是为河北师大18级软件学院的新生准备的先修课训练营，为培养18级新生，使新生提前接触，提前适应，优秀新生将会选入源码公社算法部，为编程俱乐部做预备队员。",0,78),
    new Course(8,'17级coding暑期训练营',
    "http://usercontent.edu2act.cn/media/team/18-07-09/J3LxZ5cMMP9JFjGuDbSsh8.png?imageView2/1/w/230/h/130",
    "本活动是为17级暑期训练营而创建，由源码公社和编程俱乐部发起，为17级的同学巩固基本语法、写程序的基本思路，并在此基础上，增加java的预习知识篇以及基本算法的基本培训。",13,92),
    new Course(9,'2017级Web开发(二)',
    "http://usercontent.edu2act.cn/media/team/18-09-11/Ypf253J7ydMQ2CckxWf6zJ.jpg?imageView2/1/w/230/h/130",
    "",3,399),
    new Course(10,'网络原理15级',
    "http://usercontent.edu2act.cn/media/team/16-02-21/Cy6BkoxDyWfGhQzio8XqqY.png?imageView2/1/w/230/h/130",
    "本课程的主要任务是讲授计算机网络的基础知识和主流技术，该课程主要内容是：以网络协议模型（物理层、数据链路层、网络层、传输层和应用层）为基础，自下而上系统地介绍计算机网络的基本原理，结合大量实例讲解，并探讨无线网络和下一代因特网等内容。",16,102),
    new Course(11,'产品使用与测试',
    "http://usercontent.edu2act.cn/media/team/16-01-21/oTAaJQuDwJ6iUYxuGqGPMY.png?imageView2/1/w/230/h/130",
    "产品的一系列服务， 及相关使用问题 用户体验等均可以提出。",16,19),
    new Course(12,'CMS模板制作',
    "http://usercontent.edu2act.cn/media/team/15-11-16/XaC6JMzGfiSVqVtNDiHdse.jpg?imageView2/1/w/230/h/130",
    "本班级讨论与“cms与模板制作课程”相关主题。",12,392),
]
//app.get('/api',(req,res)=>{
//    res.json(courses);
//});
app.get('/api/courses',(req,res)=>{
    res.json(courses);
});
app.get('/api/courses/:id',(req,res)=>{
    req.params;
    res.json(courses.find((ele)=>ele.id == req.params.id));
});
app.post('/api',(req,res)=>{
    //console.log(req.body);
    res.json(courses);
});
export class Class{
    constructor(
        public id:number,
        public classname:string,
        public images:string,
        public introduce:string,
        public time:number,
        public people:number,
        public video:string
    ){}
}
const classes = [
    new Class(1,"Github 开源之旅视频课程第一季：启程",
    "http://usercontent.edu2act.cn/media/cs/17-02-20/BRmabjXmc6M87Hx678jgkk.png?imageView2/1/w/320/h/190",
    "完成本课程之后，能够达到以下目标：- 实名注册 Github 账户- 能够在 Github 上搜索资料- 能够评估人和项目的活跃度- 掌握 Github 社交化- 能够创建 Github 远程仓库- 能够删除 Github 远程仓库- 能够建立本地仓库- 能够把本地仓库和远程仓库建立关联- 能够在本地仓库和远成仓库之间 push 和 pull",
    14,3737,
    "http://usercontent.edu2act.cn/media/cs/17-02-20/qywkioNyXCXzDa5bkUmXkW.mp4"),
    new Class(2,"CSS3基础",
    "http://usercontent.edu2act.cn/media/cs/16-11-14/XgKaLUTcWTUsPaqF2hXSHK.png?imageView2/1/w/320/h/190",
    "CSS3在以前的基础上添加了诸多新的选择器以及新的样式。本课程将讲解CSS3新样式以及新特性。",
    12,2317,
    "http://usercontent.edu2act.cn/media/cs/16-11-14/GrPZ9hYtvRt4ss2f2D2tmD.mp4"),
    new Class(3,"HTML5基础",
    "http://usercontent.edu2act.cn/media/cs/16-11-11/JjHN2Za86UhpyK8u6MEtsC.png?imageView2/1/w/320/h/190",
    "HTML5是最新的一项Web标准，在原有HTML4的基础上定义了一些新的标签和新的JavaScript API。是原有HTML4标准的一个超集。本课程主要介绍HTML5的新特性以及相应API。",
    12,1312,
    "http://usercontent.edu2act.cn/media/cs/16-11-11/PzEnutTEAsGFPgyiudCrW8.mp4"),
    new Class(4,"Selenium IDE WEB自动化测试入门视频课程（中）",
    "http://usercontent.edu2act.cn/media/cs/16-11-08/8ZkV8KMVi6mMQBwJ4bB7i6.png?imageView2/1/w/320/h/190",
    "上篇对自动化测试的基础知识做一些交代，为真正做自动化测试做好铺垫，然后讲解IDE工具的基本用法，学完了可以录制简单的自动化测试脚本。中篇和下篇会介绍很多技术细节。基本上中篇会把最常用到的技术细节都讲到。这样上篇和中篇的内容可以应付80%网站的自动化测试任务了。下篇有些高级话题，不是每个人都会用到的，适合骨灰级玩家。",
    13,3794,
    "http://usercontent.edu2act.cn/media/cs/16-11-08/RD6KKJxUrAMJNkaQX9wBnN.mp4"),
    new Class(5,"扩展的ICONIX软件过程实践",
    "http://usercontent.edu2act.cn/media/cs/16-11-03/TeZqcmxukYntmh8UigEeqU.png?imageView2/1/w/320/h/190",
    " ICONIX软件过程的主体设计思想是尽早进入编码阶段，缩短分析设计周期的软件开发方法合理的简化统一过程(RUP)， 基于极限编程(XP)和敏捷软件开发的思想。 ICONIX过程与 UML和RUP相比，是轻量级的过程。本实践课程是基于12306火车票购票系统的例子全面讲解ICONIX各阶段生成的UML模型以及EA工具的使用。",
    12,2269,
    "http://usercontent.edu2act.cn/media/cs/16-11-03/sWbgp5GAJPzWn2fiWzGCm4.mp4"),
    new Class(6,"Selenium IDE WEB自动化测试入门视频课程-上",
    "http://usercontent.edu2act.cn/media/cs/16-10-28/93BLumGUzRct9BRxKQgWnn.png?imageView2/1/w/320/h/190",
    "上篇对自动化测试的基础知识做一些交代，为真正做自动化测试做好铺垫，然后讲解IDE工具的基本用法，学完了可以录制简单的自动化测试脚本。",
    11,3131,
    "http://usercontent.edu2act.cn/media/cs/17-02-20/qywkioNyXCXzDa5bkUmXkW.mp4"),
    new Class(7,"网页制作与开发",
    "http://usercontent.edu2act.cn/media/cs/16-09-22/Qrnx7yH2tp7mGGLSdbhWHc.png?imageView2/1/w/320/h/190",
    "本课程利用线上与线下相结合的授课方式，以网页开发主流软件Dreamweaver为工具，教给学生快速搭建网站的方法。培养学生具备能够利用有限的代码快速搭建出网站页面的能力。",
    42,1572,
    "http://usercontent.edu2act.cn/media/cs/16-11-14/GrPZ9hYtvRt4ss2f2D2tmD.mp4"),
    new Class(8,"产品&amp;交互设计那些事儿",
    "http://usercontent.edu2act.cn/media/cs/16-09-08/DTAweqRQeVWst8N8RmH3pe.png?imageView2/1/w/320/h/190",
    "本课程是和学员一起探讨交流关于产品设计和交互设计的一些经验教训，结合具体案例讲解了一些在具体设计某些功能点时需要注意的问题。",
    5,1084,
    "http://usercontent.edu2act.cn/media/cs/17-02-20/qywkioNyXCXzDa5bkUmXkW.mp4"),
    new Class(9,"VR AR产品设计的思考视频课程",
    "http://usercontent.edu2act.cn/media/cs/16-09-08/2sLJNqumrjAEQjwGMCGRN5.png?imageView2/1/w/320/h/190",
    "“2016是VR元年”，这一观点早已在计算机互联网行业中流行开来，与VR相关的各种分析研究也是层出不穷。而随着Google Cardboard等技术逐渐普及，VR使用成本也在不断降低。",
    3,4335,
    "http://usercontent.edu2act.cn/media/cs/16-11-14/GrPZ9hYtvRt4ss2f2D2tmD.mp4"),
    new Class(10,"ProcessOn界面原型绘制",
    "http://usercontent.edu2act.cn/media/cs/16-09-02/QV7FBJ72fUkL3sv6Te2FEP.png?imageView2/1/w/320/h/190",
    "ProcessOn是国内比较有名的图形设计分享社区，有着强大的在线制图功能。本次课程主要介绍其界面原型图的绘制功能。",
    2,4234,
    "http://usercontent.edu2act.cn/media/cs/16-11-03/sWbgp5GAJPzWn2fiWzGCm4.mp4"),
    new Class(11,"ProcessOn绘制流程图",
    "http://usercontent.edu2act.cn/media/cs/16-09-02/SKFDejikkVQYmQJePPMCPk.png?imageView2/1/w/320/h/190",
    "流程图可以让流程图可以提供一种简单扼要的“缩略俯瞰图”，帮助观众快速了解业务如何运转。而在最关键的PRD文档中插入流程图可以让开发人员更顺畅的了解功能的流程。",
    4,3053,
    "http://usercontent.edu2act.cn/media/cs/16-11-03/sWbgp5GAJPzWn2fiWzGCm4.mp4"),
    new Class(12,"项目管理平台",
    "http://usercontent.edu2act.cn/media/cs/16-09-02/zv88bojNGWP9zZcThYAhS.png?imageView2/1/w/320/h/190",
    "本课程讲解了项目管理平台redmine的安装部署、管理员维护、普通用户使用，和其他同类型平台进行了简单的对比。让学员能够熟练的使用redmine进行项目进度的把握。",
    8,4423,
    "http://usercontent.edu2act.cn/media/cs/16-11-03/sWbgp5GAJPzWn2fiWzGCm4.mp4"),
]
app.get('/api/classes',(req,res)=>{
    res.json(classes);
});
app.get('/api/classes/:id',(req,res)=>{
    req.params;
    res.json(classes.find((ele)=>ele.id == req.params.id));
});
app.post('/api',(req,res)=>{
    res.json(classes);
});
export class Club{
    constructor(
        public id:number,
        public images:string,
        public clubname:string,
        public content:string,
        public teacher:string,
        public data:string,
        public read:number,
        public comment:number
    ){}
}
const community = [
    new Club(1,"http://usercontent.edu2act.cn/media/ckeditor/upload2018/0930/5WounpUrmbfrtEVquzw5De.jpg",
    "WEB开发(二)——函数",
    "（一）函数三要素函数的三要素为函数名、参数（形参，实参），返回值。（二）函数定义与调用函数定义的关键字为function，不能省略，也不要能简写。定义函数有3种形式，相应的调用形式有2种。",
    "刘秀梅","2018-10-11 15:10",1301,4,),
    new Club(2,"http://usercontent.edu2act.cn/media/ckeditor/upload2018/0930/c67LLKXLBdRtuxNueeRshN.jpg",
    "类定义关键字详解",
    "static 表示静态，它可以修饰属性，方法和代码块。1.static修饰属性（类变量），那么这个属性就可以用类名.属性名来访问，也就是使这个属性成为本类的类变量，为本类对象所共有。这个属性就是全类公有。（共有的类变量与对象无关，只和类有关）。注意：类中的实例变量是在创建对象时被初始化的，被static修饰的属性，也就是类变量，是在类加载时被创建并进行初始化，类加载的过程是进行一次。也就是类变量只会被创建一次。2.static修饰方法（静态方法），会使这个方法成为整个类所公有的方法，可以用类名.方法名访问。注意：static修饰的方法，不直接能访问本类中的非静态(static)成员（包括方法和属性），本类的静态（static）方法可以访问本类的静态成员（包括方法和属性），可以调用静态方法。静态方法要慎重使用。在静态方法中不能出现this关键字。",
    "张馨元","2018-10-09 19:21",62,0,),
    new Club(3,"http://usercontent.edu2act.cn/media/ckeditor/upload2018/0930/3RtZyjoCHuFQSyZCWgr2o5.jpg",
    "数据结构——线性表的经典运用",
    "一元多项式可采用两种存储表示方法。在实际工程中使用哪一种？视多项式进行哪种运算而定。若只对多项式进行求值不改变多项式的系数和指数的运算，则采用顺序存储结构；否则，采用链式存储结构。",
    "杨伟彬","2018-10-08 14:28",1301,4,),
    new Club(4,"http://usercontent.edu2act.cn/media/ckeditor/upload2018/0930/ZVukV3kKu2r8b9ezbbc5VA.jpg",
    "栈和队列之间的相互转化",
    "需要两个队列data，help，因为队列是先进先出，想要模拟栈的结构，每次取栈顶的元素也就相当于取队列中队尾的元素，要取data队列的队尾元素，需将最后一个元素前面的先取走，才能取到最后一个元素，所以，将前面的元素逐个弹出到help队列中，顺序和在data中是一致的，只是缺少最后一个元素其他都一样，这样就可以取到data中的最后一个元素了，此时data中已没有了元素，而help中的元素除了没有取的最后一个元素顺序和原来的data一样，所以把help作为data，data作为help进行下一次的pop操作，至于push操作 都是从一个位置进入，要不是队尾要不是栈顶，没有改变。",
    "李建涛","2018-10-01 12:51",1301,4,),
    new Club(5,"http://usercontent.edu2act.cn/media/ckeditor/upload2018/0930/5WounpUrmbfrtEVquzw5De.jpg",
    "JavaScript enent(事件对象)",
    "在触发DOM 上的某个事件时，会产生一个事件对象 event，这个对象中包含着所有与事件有关的信息。包括导致事件的元素、事件的类型以及其他与特定事件相关的信息。例如，鼠标操作导致的事件对象中，会包含鼠标位置的信息，而键盘操作导致的事件对象中，会包含与按下的键有关的信息。所有浏览器都支持 event 对象，但支持方式不同。只有在事件处理程序执行期间，event对象才会存在；一旦事件处理程序执行完成，event对象就会被销毁。",
    "刘孟祎","2018-09-28 09:40",1301,4,),
    new Club(6,"http://usercontent.edu2act.cn/media/ckeditor/upload2018/0930/3RtZyjoCHuFQSyZCWgr2o5.jpg",
    "数据结构——快速排序",
    "快速排序是C.R.A.Hoare于1962年提出的一种划分交换排序。它采用了一种分治的策略，通常称其为分治法(Divide-and-ConquerMethod)。分治法的基本思想是：将原问题分解为若干个规模更小但结构与原问题相似的子问题。递归地解这些子问题，然后将这些子问题的解组合为原问题的解。下面这张图会说明分治算法是如何进行的：将cn分成了两个cn/2，转而分成了cn/4，cn/8......通过这样一层一层的求解规模小的子问题，最终将其合并之后就能求出原问题的解。",
    "张玉茹","2018-09-27 16:57",1301,4,),
]
app.get('/api/community',(req,res)=>{
    res.json(community);
});
app.get('/api/community/:id',(req,res)=>{
    req.params;
    res.json(community.find((ele)=>ele.id == req.params.id));
});
app.post('/api',(req,res)=>{
    res.json(community);
});
export class Join{
    constructor(
        public id:number,
        public images:string,
        public name:string,
        public detail:string,
        public task:number,
        public people:number,
   ){}
}
const myjoin = [
    new Join(1,"http://usercontent.edu2act.cn/media/team/18-09-18/VE66xjRaii5X8Y9qFZQLZC.jpg?imageView2/1/w/230/h/130",
    "2016级混合应用开发","",
    3,91),
    new Join(2,"http://usercontent.edu2act.cn/media/team/18-09-11/B32yP44hiothFxyegigXe7.jpg?imageView2/1/w/230/h/130",
    "2016级Html5与CSS3前端开发","本课程主要学习HTML5的新特性、CSS3的新特性以及前端开发框架Bootstrap。",
    5,91),
    new Join(3,"http://usercontent.edu2act.cn/media/team/18-03-05/6niXYjHC5hvoAbWKUQCdPa.jpg?imageView2/1/w/230/h/130",
    "JavaScript进阶","《JavaScript进阶》是计算机软件及相关专业在H5前端开发方向基础课，它是为培养应用型人才掌握使用计算机的技能而开设的。本课程是一门有关JavaScript脚本语言的进阶课程。学习本课程的同学需具有一定的JavaScript语言基础。通过本课程的学习，可以进一步掌握Java",
    23,95),
    new Join(4,"http://usercontent.edu2act.cn/media/team/18-02-26/T6JLRm2Y9noLzWNjwAhF8X.png?imageView2/1/w/230/h/130",
    "2016级操作系统","操作系统是用户和计算机的接口，同时也是计算机硬件和其他软件的接口。操作系统的功能包括管理计算机系统的硬件、软件及数据资源，控制程序运行，改善人机界面，为其它应用软件提供支持，让计算机系统所有资源最大限度地发挥作用，提供各种形式的用户界面，使用户有一个好的工作环境，为其它软件的开发",
    7,398),
    new Join(5,"http://usercontent.edu2act.cn/media/team/18-02-26/QMXWNRHDsraTaVofSiRCbF.png?imageView2/1/w/230/h/130",
    "2016级数据库原理","",
    6,400),
]
app.get('/api/myjoin',(req,res)=>{
    res.json(myjoin);
});
app.get('/api/myjoin/:id',(req,res)=>{
    req.params;
    res.json(myjoin.find((ele)=>ele.id == req.params.id));
});
app.post('/api',(req,res)=>{
    res.json(myjoin);
});
app.listen(8000);