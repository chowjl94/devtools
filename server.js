

//comment 2


const http = require("http");

const host = 'localhost';
const port = 8000;

const requestListener = function (req, res) {
    res.writeHead(200);
    res.end("My first server!");
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});

// sends process to node
// process is a collection of commands
// process id is tagged to a socket(port)
// os takes note of processes by keeping track of process ids
