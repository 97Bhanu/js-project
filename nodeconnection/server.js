var http = require('http')

var url = require('url')

http.createServer(function(req , res)
{

    var route = req.url

    if(route==='/')
    {
        res.end('This is the information from backened to home to page')
    }
    if(route==='/getusernames')
    {
        var usernames = ['messi' ,'ronaldo' , 'sachin']
        res.end(JSON.stringify(usernames))
    }

    console.log('My Node JS Server started successfully')
}).listen(7000)