const express = require("express");
const cors = require("cors");
const inventoryRoutes = require("./routes/inventoryRoutes");
const app = express();
app.use(express.json({ limit: 10000000000 }));
app.use(express.urlencoded({ extended: true }));
app.use(cors("*"));

app.use("/api/v1", inventoryRoutes);


app.get("/",(req,res)=>{
  res.status(200).json({message:"Your server is healthy"})
})


// Global error handler
app.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    message: err.message || "Something went wrong!",
  });
});


app.listen(4001, () => {
  console.log("http://localhost:4001");
});
