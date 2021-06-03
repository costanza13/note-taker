const express = require('express');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(express.static('public'));

// html routes
app.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, './public/notes.html'));
});

// api routes
app.get('/api/notes', (req, res) => {  
  res.sendFile(path.join(__dirname, 'db/db.json'));
});

app.post('/api/note', ({ body }, res) => {
  console.log('adding note ', + body);
}); 

app.delete('/api/note/:id', (req, res) => {
  console.log('deleting note ' + req.params.id);
}); 

// default response for any other request (Not Found)
app.use((req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
