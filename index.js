let fs = require("fs");
let https = require("https");
let privateKey = fs.readFileSync("selfsigned.key", "utf8");
let certificate = fs.readFileSync("selfsigned.crt", "utf8");

let credentials = { key: privateKey, cert: certificate };
let express = require("express");
let app = express();

app.use(express.static(__dirname + "/public"));

let server = https.createServer(credentials, app);
server.listen(3000, () => console.log(`Running HTTPS server with express!`));
