/*
	Created By sgyp on 2016/12/1
*/
var express = require('express');
//加载模块
var swig = require('swig');
//加载模板

var app = express();
//创建app应用=> NodeJs   Http.createServer
app.listen(8080);
//监听8081端口
app.engine('html',swig.renderFile);
//配置应用模板，第一个参数：模板的后缀。第二个参数表示解析方法
app.set('views','./views');
//设置模板文件存放的目录，第一个参数必须是views,第二个是路径
app.set('view engine','html');
//注册所使用的模板引擎，第一个参数必须是view engine,第二个参数和app.engine
//=>第一个参数是一致的
swig.setDefaults({cache:false});
//可以取消模板的缓存，适用于开发过程

/*
	路由绑定
	app.get()或app.post()等方法，把url路径和函数绑定
	app.get('/',function(req,res,next){
		req:request对象   保存请求数据
		res:response对象   服务器输出对象
		next:用于执行下一个和路径匹配的函数
		通过res.sent()发回数据
	})
*/

app.get('/',function(req,res,next){
		res.render('index');
		//res.render 读取views目录下的指定文件，解析并返回给客户端
		//第一个参数：标示模板的文件，相对于views目录
		//第二个参数，传递给模板使用的数据

		//res.send('<h1>欢迎光临我的博客</h1>')

});
app.get('/main.css',function(req,res,next){
	res.setHeader('content-type','text/css');
	res.send("body {background:red;}");
});
app.use(express.static('public'));
//静态文件，设置public为文件目录
