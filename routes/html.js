const path = require("path");

module.exports = function(app) {

    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "..", "index.html"));
    })
    app.get("/stats", function(req, res) {
        res.sendFile(path.join(__dirname, "..", "public", "stats.html"));
    })
    app.get("/exercise", function(req, res) {
        res.sendFile(path.join(__dirname, "..", "public", "exercise.html"));
    })
}


// module.exports = function(app) {

//     app.get("/", function(req, res) {
//         res.sendFile(path.join(__dirname, "index.html"));
//     })
//     app.get("/stats", function(req, res) {
//         res.sendFile(path.join(__dirname, "..", "public", "stats.html"));
//     })
//     app.get("/exercise", function(req, res) {
//         res.sendFile(path.join(__dirname, "..", "public", "exercise.html"));
//     })
// }