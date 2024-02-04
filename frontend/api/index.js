const express = require("express")
const path = require("path")
const port = 5173
const app = express()

app.use(express.static("./dist"))

app.get("*", (req, res, next) => {
    res.sendFile(path.resolve(__dirname, "./dist/index.html"))
})

app.listen(port, () => {
    console.log(`Client API is running on port ${port}`);
})
console.log("this is my client api - it will serve the static files")