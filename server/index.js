const express = require('express')
const cors = require('cors')
const {connect} = require('mongoose')
require('dotenv').config()

const app = express();

app.listen(5001,() => console.log("Server Running on port 5001"))