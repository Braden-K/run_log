const express = require("express");
const userRoutes = require("./routes");

const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello");
});

app.use("/api/v1/users", userRoutes);

app.listen(port, () => console.log(`App listening on port ${port}`));
