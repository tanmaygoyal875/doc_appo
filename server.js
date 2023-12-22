const express = require("express");

const app = express();

require('dotenv').config()

const port = process.env.PORT || 5001;

const dbConfig = require("./config/dbConfig");
app.use(express.json());

const userRoute = require("/Users/tanmay/Downloads/doc_name/routes/userRoute");
app.use('/api/user',userRoute);



app.listen(port, () => console.log(`Node server started at port ${port}`));