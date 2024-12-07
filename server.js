require('dotenv').config();  // Load environment variables
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const squareRoutes = require('./routes/squareRoutes');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());


app.use('/api/squares', squareRoutes);

app.listen(port, () => {
  // console.log(`Server running at http://localhost:${port}`);
});
