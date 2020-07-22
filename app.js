const express = require("express");
const app = express();
app.engine('html', require('ejs').renderFile);
app.use(express.static("public")); 

var faker = require('faker');
// routes
app.get("/", function(req, res) { 
    res.render("index.ejs", {"random": faker.hacker.adjective() });
});

app.get("/examples", function(req, res) { 
    res.render("examples.html");
});

app.get("/standards", function(req, res) { 
    res.render("best_practices.html");
});

app.get("/resources", function(req, res) { 
    res.render("resources.html");
});

// app.listen(process.env.PORT, process.env.IP, function() { 
//     console.log("Express server is running...");
// });

app.listen("8080", "127.0.0.1", function() { 
    console.log("Express server is running...");
});
