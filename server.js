const fs = require("fs");
const http = require("http");

const server = http.createServer((req, res) => {
  if (req.method === "GET" && req.url === "/") {
    fs.readFile("words.txt", "utf8", (err, data) => {
      if (err) {
        res.statusCode = 500;
        res.end("Internal Server Error");
        return;
      }

      const lines = data.trim().split("\n");
      const randomLine = lines[Math.floor(Math.random() * lines.length)];
      const words = randomLine.split(",");

      res.setHeader("Content-Type", "text/html");
      res.end(
        `<div>${words[0]}</div><div>${words[1]}</div><div>${words[2]}</div><div>${words[3]}</div><div>${words[4]}</div>`
      );
    });
  } else {
    res.statusCode = 404;
    res.end("Not Found");
  }
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
