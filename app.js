
const express = require('express');
const app = express();

// IMPORTANT: bind to 0.0.0.0 for Docker
const PORT = 3001;

app.get('/', (req, res) => {
    res.send("CI/CD pipeline is working 🚀🔥");
});

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
});
