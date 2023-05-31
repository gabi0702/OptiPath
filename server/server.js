const express = require("express");
const app = express();
const axios = require("axios");

app.get("/api", async (req, res) => {
  const { origin, destination } = req.query;

  if (!origin || !destination) {
    return res
      .status(400)
      .json({ error: "Origin and destination are required" });
  }

  const key = "AIzaSyC5r4z_Z2IyJPWiOeyPMrk4b2lLt2Rex9M";
  const url = `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${origin}&destinations=${destination}&key=${key}`;

  try {
    const response = await axios.get(url);
    res.json(response.data.rows[0].elements[0].distance["value"]);
  } catch (error) {
    res.status(500).json({ error: "An error occurred" });
  }
});

app.get("/api1", async (req, res) => {
  const { origin, destination } = req.query;

  if (!origin || !destination) {
    return res
      .status(400)
      .json({ error: "Origin and destination are required" });
  }

  const key = "AIzaSyC5r4z_Z2IyJPWiOeyPMrk4b2lLt2Rex9M";
  const url = `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${origin}&destinations=${destination}&key=${key}`;

  try {
    const response = await axios.get(url);
    res.json(response.data.rows[0].elements[0].duration["value"]);
  } catch (error) {
    res.status(500).json({ error: "An error occurred" });
  }
});

app.listen(4000, () => {
  console.log("Server started on port 4000");
});
