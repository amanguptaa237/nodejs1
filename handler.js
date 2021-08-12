const  qs = require('querystring');


function home(resp)
{
    console.log('in home ')
    var htmlfile='<html>'+
    '<head>'+
    '</head>'+
    '<body>'+
    '<form action="review" method="post">'+
    '<textarea name="text" rows="20"  cols="60"></textarea>'+
    '<input type="submit" value=submit.text"/>'+
    '</form>'+
    
    
    '</body>'+
    '</html>';

    
    
    
    //resp.writeHead(400,{"Content-Type": "text/html"});
    resp.end(htmlfile);
}

function review(resp,reviewdata)
{   resp.writeHead(400,{"Content-Type": "text/plain"});
     resp.write("your review is"+ qs.parse(reviewdata).text );
     resp.end("done here")
     
    console.log("in review")
}

exports.home=home;
exports.review=review;