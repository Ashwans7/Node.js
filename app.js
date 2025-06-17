let express = require("express")
let app = express()

//let ejs = require("ejs")
app.set("view engine", "ejs")// express js ma chai js bhanne template engine as a frontend ko lagi use garna aateko xu tesko lagi k kati chaine configuration 
//garne 


app.get("/",(request,response)=> {
    let name = "AShwan Shresstha"
        //response.render("home.ejs")
        response.render("home",{haha : name})

})

app.get("/about",(req,res)=>{
    res.render("about")
})

app.get("/contact",(req,res)=>{
    res.send("this is contact")
})

app.use((req, res) => {
    res.send("The route you are requesting is not found")
})

app.listen(3000,()=> {
    console.log("project has started at port 3000")
})


