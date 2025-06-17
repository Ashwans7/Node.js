let express = require("express")
let app = express()

app.get("/", (req,res) => {
    res.send("<h1> This is homepage</h1>")
})


app.listen(3000,()=> {
    console.log("project has started at port 3000")
})