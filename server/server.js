console.log("Starting server.js...");

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
console.log("Express initialized");
app.use(cors({ origin: process.env.FRONTEND_URL }));
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Photography Studio Backend');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`✅ Server running on http://localhost:${PORT}`));
