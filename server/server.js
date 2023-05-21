const express = require("express");
const cors = require("cors");
const userRoutes = require("./routes/userRoutes");
const runRoutes = require("./routes/runRoutes");

const app = express();
const port = 5000;

app.use(express.json());
app.use(cors());

app.use("/api/v1/users", userRoutes);
app.use("/api/v1/runs", runRoutes);

app.listen(port, () => console.log(`App listening on port ${port}`));
