const express = require('express');
const cors = require('cors');
const authRoutes = require('./src/routes/authRoutes');
const bookRoutes = require('./src/routes/bookRoutes');
const authenticateToken = require('./src/middlewares/authMiddleware');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/auth', authRoutes);
app.use('/books', authenticateToken, bookRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running in port ${PORT}`);
});
