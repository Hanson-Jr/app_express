const  express = require ("express")

const bodyparser = require ("body-parser")
const logger = require("./logger")
const authorRouter = require("./author_route")
const PORT = 7100
const HOSTNAME = "localhost"

const app = express()

app.use(express.json())
app.use (bodyparser.json())
app.use(logger)
app.use("/authors", authorRouter)

app.get("/authors", (req, res)=>{
  res.status(202).json(authors)
})

app.post("/authors", (req,res)=>{
res.status(201).send("Successfully Post the Author")
})

app.put("/authors",(req, res)=>{
  res.status(200)
  res.send("successfully put the authors")
})

app.delete("/authors", (req,res)=>{
  res.status(401).send("authors deleted successfully")
})

app.listen(PORT, ()=>{
  console.log(`Server is currently http://${HOSTNAME}:${PORT}`)
})










