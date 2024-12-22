import express from "express";

const app = express()

const PORT = 8000

app.get("/api", (req, res, next) => {
  return res.status(200).json({message: "API WORKING"})
})

app.listen(PORT, () => console.log(`APP LISTENING ON PORT ${PORT} 💥`))
