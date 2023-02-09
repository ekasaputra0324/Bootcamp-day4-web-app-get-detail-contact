const http = require('http');
const fs = require('fs');
const port = 3000;

http
.createServer((req, res) => {
    const url = req.url;
    console.log(url);

    res.writeHead(200, {
        'Content-Type': 'text/html'
    });
    page(url);
    function page(url){
        if (url == '/') {
            url = './index';    
        }
        console.log(url);
        fs.readFile(`./${url}.html`, (err,data)=> {
            if (err) {
                res.writeHead(404);
                fs.write('error page not found')
            }else{
                res.write(data);
                res.end(); 
            }
        });
    }
})
.listen(port, () => {
    console.log("server listening on port: " + port);
});