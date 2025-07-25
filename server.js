const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.use('/api/chat', require('./chat'));

app.listen(port, () => {
  console.log(`Gavinbot is flapping on port ${port}`);
});

