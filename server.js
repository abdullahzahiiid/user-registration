const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('public'));
app.use(express.json());

app.post('/register', (req, res) => {
  const { username, email } = req.body;
  console.log('New user registered:', username, email);
  res.json({ message: `User ${username} registered with email ${email}` });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
