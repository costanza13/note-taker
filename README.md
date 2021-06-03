# Note Taker

An application for writing and saving notes. This application uses an Express.js back end and stores and retrieves note data in a JSON file.

Try it out: https://note-taker-12hundred.herokuapp.com/

## Description/Features

This application was designed primarily with small business owners in mind, to help them write and save notes to organize their thoughts and keep track of tasks they need to complete.

It provides the following functionality:

* Opening the Note Taker presents the user with a landing page with a link to a notes page
* The notes page displays existing notes, listed in the left-hand column, plus empty fields to enter a new note title and the note’s text in the right-hand column
* When both a new title and the note’s text have been entered, a Save icon appears in the navigation at the top of the page
* Clicking the Save icon saves the note and adds it to the list the left-hand column with the other existing notes
* Notes in the left-hand column can be clicked to expand them for viewing in the right-hand column
* Clicking on the Write icon in the navigation at the top of the page presents empty fields in the right-hand column for entering a new note's title and text
* Existing notes can be deleted by clicking the trash can icon next to them in the left-hand column
* Notes are stored in JSON format in a file on the server, and persist between sessions and across clients.

## Credits

This project uses:
- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [Bootstrap](https://getbootstrap.com/)
- [FontAwesome](https://fontawesome.com/)

## Screenshots

![Landing Page](./public/assets/images/landing-page.png)

![Existing notes are listed in the left-hand column with empty fields on the right-hand side for the new note’s title and text.](./public/assets/images/new-note.png)

![Note titled “Sample Note” reads, “This is a sample note. It exists only to show you, esteemed user, what your notes will look like once you add them.  Feel free to delete it using the trash icon.](./public/assets/images/view-note.png)



## Links

* An instance of the application is deployed at: https://note-taker-12hundred.herokuapp.com/

* GitHub repository: https://github.com/costanza13/note-taker
