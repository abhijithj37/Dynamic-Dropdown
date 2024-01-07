const dotenv=require('dotenv')
dotenv.config()
const express = require('express');
const app = express();
const cors=require('cors');
const client = require('./db/db');
const routes = require('./routes/route');



client.connect()

app.use(express.json());
app.use(cors())

app.use('/api',routes)


const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
console.log(`Server is running on port ${PORT}`);
});
