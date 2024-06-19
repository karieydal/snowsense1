const express = require('express');
const mongoose = require('mongoose');
const Comment = require('./models/Comment');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/comments', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.get('/api/comments', async (req, res) => {
  try {
    const comments = await Comment.find();
    res.json(comments);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching comments' });
  }
});

app.post('/api/comments', async (req, res) => {
  try {
    const comment = new Comment({
      text: req.body.text,
      timestamp: new Date(),
    });
    await comment.save();
    res.json(comment);
  } catch (error) {
    res.status(500).json({ error: 'Error adding comment' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});