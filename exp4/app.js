const express = require('express');
const app = express();
const collegeRoutes = require('./routes/collegeRoutes');
app.use('/college', collegeRoutes);
app.listen(3000, () => {
console.log('Server running at http://localhost:3000'); });