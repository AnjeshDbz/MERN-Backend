let http = require("http");

let server = http.createServer((req, res) => {
  if (req.url == "/news") {
    let obj = {
      status: 1,
      data: [
        {
          newsTitle: "title",
          newsDes: "Description",
        },
        {
          newsTitle: "title2",
          newsDes: "Description2",
        },
      ],
    };
    res.end(JSON.stringify(obj));
  }
  if (req.url == "/about") {
    res.end("about");
  }

  if (req.url == "/") {
    res.end("welcome to http");
  }
});

server.listen("8000"); // http://localhost:8000
