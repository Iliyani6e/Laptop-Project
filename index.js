//fs is a node package that allows us to read files from the file system
const fs = require("fs");

const http = require("http");

console.log(__dirname);
//Read the data.json file.The
const json = fs.readFileSync(`${__dirname}/data/data.json`, `utf-8`);

const laptopData = JSON.parse(json);

const server = http.createServer((req, res) => {
  console.log(`Someone did access the server!`);
});

server.listen(5000, `127.0.0.1`, () => {
  console.log(`Listening!!!`);
});
