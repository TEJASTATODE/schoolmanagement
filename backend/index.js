const express = require('express');
const dotenv = require('dotenv');
const schoolRoutes = require('./routes/schools');
dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', schoolRoutes);

app.get('/', (req, res) => {
        res.send('api is working');
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port: http://localhost:${port}`);
});
