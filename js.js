const http = require("http");
const fs = require("fs");

function handler(req, res) {
    const users = fs.readFileSync("users.json");
   if (req.url === "/count") {
        let count = JSON.parse(users).length
        res.end(`count:  ${count}`)
    } else if (req.url.startsWith("/delete/")) {
        let userId = +req.url.split("/").reverse()[0]
        let arrUsers = JSON.parse(users)
        arrUsers.splice(userId - 1, 1)
        res.end(JSON.stringify(arrUsers));
    }
}
http.createServer(handler).listen(3000)
