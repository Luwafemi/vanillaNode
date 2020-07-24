const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "content-Type": "text/plain" });
  if (req.method === "GET") {
    res.end("Hello World, Welcome to WeJapa Internship!");
  }

  if (req.method === "POST") {
    let data = [];
    req.on("data", (chunk) => {
      data.push(chunk);
    });
    req.on("end", () => {
      var name = JSON.parse(data).name;
      return res.end(`Hello ${name}, Welcome to WeJapa Internship!`);
    });
  }
});
const PORT = process.env.PORT || 3000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}...`));
