const express = require("express")
const app = express()
const routes = require("./routes/routes");
const dotenv = require("dotenv")
dotenv.config();

app.use("/", routes);




// ----------------------- server start -------------------
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});