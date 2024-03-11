let counter = 0
const
    color = require("colors"),
    logger = (req, res, next) => {
        let date = new Date;
        req.url != "/favicon.ico"
            ?
            console.log("\n", String(++counter).bold, req.method.blue, req.url.cyan, "at".yellow, date.toLocaleTimeString().blue)
            :
            null;
        next();
    };

module.exports = logger