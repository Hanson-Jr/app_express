const express = require ("express")
const authorRouter = express.Router()

const authors = [
  {
    title: "Nodejs in action",
    id: 1,
    year: 1985
  },
  {
    title: "Javascript for beginner",
    id: 2,
    year: 2000
  },
  {
    title: "Advance Python language",
    id: 3,
    year: 1996
  },
  {
    title: "Nodejs in action(express)",
    id: 4,
    year: 1985
  }
]

authorRouter.get("/",(req,res)=>{
    res.json(authors)
})

authorRouter.post("/",(req,res)=>{
  res.json(authors)
})

authorRouter.put("/",(req,res)=>{
  res.json(authors)
})

authorRouter.delete("/authors", (req,res)=>{
  res.json(authors)
})




module.exports = authorRouter