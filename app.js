var server=require('./server');
var router=require('./router');
var handler=require('./handler');


var handel={}
handel['/home']=handler.home;
handel['/review']=handler.review;


server.startserver(handel,router.route);