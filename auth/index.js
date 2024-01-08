const express = require("express");
const cors = require("cors");
const authRouter = require("./routers/authRoutes");

const app = express();
app.use(express.json({ limit: 10000000000 }));
app.use(express.urlencoded({ extended: true }));
app.use(cors("*"));

const PORT=process.env.PORT || 4005

// Routers
app.use("/api/v1", authRouter);


app.get("/",(req,res)=>{
  res.status(200).json({message:"Your server is healthy"})
})


// Global Error Handler
app.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    message: err.message || "Something went wrong!",
  });
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
