// server.js - Express server with JWT authentication
const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/auth');
const topicRoutes = require('./routes/topics');
const quizRoutes = require('./routes/quizzes');
const app = express();
require('dotenv').config();

// Middleware
app.use(express.json());

// Database connection
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error(err));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/topics', topicRoutes);
app.use('/api/quizzes', quizRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});