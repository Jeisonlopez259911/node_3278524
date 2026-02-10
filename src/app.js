const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('app is running');
});

const PORT = 3000;
/* app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
}); */

module.exports = app;
