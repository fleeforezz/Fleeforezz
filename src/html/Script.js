/*var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer(function (req, res) {
    // declare q, filename variable
    var q = url.parse(req.url, true);
    var filename = "." + q.pathname;
    
    // Read from file
    fs.readFile(filename, function(err, data) {
    // If type wrong url then return 404 Not Found
    if (err) {
        res.writeHead(404, {'Content-Type': 'text/html'});
        return res.end("404 Not Found");
    } 
    
    //write data frome filename
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    res.end();
    });
}).listen(8080);*/

let leaf2 = document.getElementById("leaf2");
let leaf3 = document.getElementById("leaf3");

window.addEventListener('scroll', () => {
    let value = window.scrollY;

    leaf2.style.top = value * -0.5 + 'px';
    leaf2.style.left = value * 0.5 + 'px';
    leaf3.style.top = value * 0.5 + 'px';
    leaf3.style.left = value * -0.5 + 'px';
});

window.onscroll = function() {
    scrollFunction();
}

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("return-to-top").style.left = "0";
    }
    else {
        document.getElementById("return-to-top").style.left = "150px";
    }
}