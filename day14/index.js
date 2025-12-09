const server = http.createServer((req, res) => {    

    const parsedUrl = new URL(req.url, `http://${req.headers.host}`);
    const { pathname, searchParams } = parsedUrl;

    console.log(parsedUrl)
    console.log(pathname)
    console.log(searchParams)

    if(pathname === '/hi') {
        res.writeHead(200);
        res.end("Hello");
    }
    else if(pathname === '/who') {
        res.writeHead(200)
        res.end("i'm jinbyeonghun")
    }
    else {
        res.writeHead(200);
        res.end("please req : /hi or /who");
    }
    res.writeHead(200);
    res.end("hi~ i'm jinbyeonghun");
   
});

server.litsen(PORT, () => {
    console.log(`server running on port ${PORT}`);
})

