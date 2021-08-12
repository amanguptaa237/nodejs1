function route(handel,pathname,resp,reviewdata)
{

    console.log('routing request for'+pathname);

    if(typeof handel[pathname]==='function')
    { 
        handel[pathname](resp,reviewdata);
        }
    else 
    {
        console.log('no hndeler function found'+pathname);
        resp.writeHead(400,{"Content-Type": "text/plain"});
        resp.write('error 4040')

    }
} 
exports.route=route;
