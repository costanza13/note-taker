const express = require('express');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(express.static('public'));

const notes = JSON.parse(fs.readFileSync(path.join(__dirname, 'db/db.json')));

// html routes
app.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/notes.html'));
});

// api routes
app.get('/api/notes', (req, res) => {  
  res.sendFile(path.join(__dirname, 'db/db.json'));
});

app.post('/api/notes', ({ body }, res) => {
  const newNote = body;
  newNote.id = 1 + notes.reduce((acc, a) => Math.max(acc, a.id), 0);
  notes.push(newNote);
  fs.writeFile(path.join(__dirname, 'db/db.json'), JSON.stringify(notes, null, 2), (err) => {
    if (err) {
      console.error(err.message);
      res.status(500).json({
        error: err.message
      });
    }
    res.json({
      message: 'saved new note',
      note: newNote
    });
  });
});

app.delete('/api/notes/:id', (req, res) => {
  console.log('deleting note ' + req.params.id);
}); 

// default response for any other request (Not Found)
app.use((req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
