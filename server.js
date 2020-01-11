var express = require('express'),
    app = express();

app.use(express.static(__dirname));

app.listen(8000);
console.log("Server started at http://localhost:8000/")
