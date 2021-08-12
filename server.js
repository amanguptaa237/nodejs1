
var http = require('http')

var url = require('url');
const { review } = require('./handler');

function startserver(handel,route)
{
function onRequest(request,resp)
{   var reviewdata="";
    
    var pathname=url.parse(request.url).pathname;
    console.log("request recived"+pathname);
    request.setEncoding("utf8");

     request.addListener("data",function(chunk){
        reviewdata +=chunk;



     })

     request.addListener("end",function(){
        route(handel,pathname,resp,reviewdata);

     })


    //route(handel,pathname,resp);
    
}

http.createServer(onRequest).listen(8080);
console.log("server started on 8080");
}



exports.startserver=startserver;