const express = require("express");
const userRoutes = require("./routes/userRoutes");
const runRoutes = require("./routes/runRoutes");

const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello");
});

app.use("/api/v1/users", userRoutes);
app.use("/api/v1/runs", runRoutes);

app.listen(port, () => console.log(`App listening on port ${port}`));
