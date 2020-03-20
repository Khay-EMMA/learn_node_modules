const http = require("http");
const courses = [
  {
    id: 1,
    title: "biology"
  },
  {
    id: 2,
    title: "chemistry"
  }
];

const server = http.createServer((request, response) => {
  if (request.url === "/") {
    response.write("Hello world");
    response.end();
  }

  if (request.url === "/api/courses") {
    response.write(JSON.stringify(courses));
    response.end();
  }
});

// server.on("connection", socket => {
//   console.log("New connection....");
// });

server.listen(3000);

console.log("Listining on port 3000....");
