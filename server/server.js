const express = require ('express');
const connectDB = require('./config/db')

// const cors = require ('cors');

//import projectRoutes from '../server/routes/projects.js'

const app = express();

// Connect to Database
connectDB();

app.get('/', (req,res) => res.send('API is running'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log('Server started on port ${PORT}'));

