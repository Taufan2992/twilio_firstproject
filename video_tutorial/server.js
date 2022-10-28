require("dotenv").config();
const { v4: uuidv4 } = require("uuid");
const AccessToken = require("twilio").jwt.AccessToken;
const VideoGrant = AccessToken.VideoGrant;
const express = require("express");
const app = express();
const port = 5000;
//Get routes to the variabel here
const router =  require("./src/routes")

// use the Express JSON middleware
app.use(express.json());

// Start the Express server
app.listen(port, () => {
  console.log(`Express server running on port ${port}`);
});

const cors = require('cors');
app.use(express.json())
app.use(cors())
// serve static files from the public directory
// app.use(express.static("public"));
//Create endpoint grouping and router here
app.use("/", router)

// app.get("/", (req, res) => {
//   res.sendFile("public/index.html");
// });
