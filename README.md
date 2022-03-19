# DML Coding Challenge / by Peter Bishop

This is my submission for the DML Coding Challenge. Given a TypeScript REACT app with a SQLite database, my challenge was to adapt this framework into an app with core functionality to send CREATE, READ, and DELETE requests to a database and present the results to the user.

Not having prior experience with TypeScript or SQLLite, I opted to replace the SQLite database with MongoDB and build the project with javascript.

The concept of this project is to display (GET "/dogs") a list of lost dogs who have been found, and allow users to search through them or sort the list (with request query parameters), view more details about them (GET "/dog/:id"), or take them home (DELETE "/dog/:id)! If a dog needs to be added to the list, there is a form to submit a new dog to the list (POST "/dogs").

## Getting Started Instructions

- In the [root] directory run `npm i` to install front and backend dependancies.
- In the [/api/src/seeders] directory run `node seed.js`.
- In the [root] directory run `npm run develop` to start the server and launch the react app.

- Find a dog and take'm home.

## Additions and Subsitutions

- Subsituted MongoDB as the backend database.
- Added AXIOS to take advantage of it's expanded abilities beyod javascript's fetch().
- Added react-router-dom for its dynamic routing.
- Styled with react-boostrap, though not tested for responsivness.
- Added Concurrently so I could start up the front and backend together... Concurrently.

## Feature List

- Create, Read (all and one document), Update (all or one attribute), and Delete on the doggy_db database through frontend UI.
- 
