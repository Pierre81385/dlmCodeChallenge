# DML Coding Challenge / by Peter Bishop

This is my submission for the DML Coding Challenge. Given a TypeScript REACT app with a SQLite database, my challenge was to adapt this framework into an app with core functionality to send CREATE, READ, and DELETE requests to a database and present the results to the user.

The concept of this project is to display (GET "/dogs") a list of lost dogs who have been found, and allow users to search through them or sort the list (with request query parameters), view more details about them (GET "/dog/:id"), or take them home (DELETE "/dog/:id)! If a dog needs to be added to the list, there is a form to submit a new dog to the list (POST "/dogs").

![Alt Text](ui/src/assets/demo.gif)

## Getting Started Instructions

- In the [root] directory run `npm i` to install front and backend dependancies.
- In the [/api/src/seeders] directory run `node seed.js`.
- In the [root] directory run `npm run develop` to start the server and launch the react app.

- Find a dog. Take'm home.

## Dependancies

- "body-parser": "^1.19.2",
- "cors": "^2.8.5",
- "express": "^4.17.3",
- "mongoose": "^6.2.7"
- "@types/react-router-dom": "^5.3.3",
- "axios": "^0.26.1",
- "bootstrap": "^5.1.3",
- "react": "^17.0.2",
- "react-bootstrap": "^2.2.1",
- "react-dom": "^17.0.2",
- "react-icons": "^4.3.1",
- "react-query": "^3.34.16",
- "react-router-dom": "^6.2.2"

## Additions and Subsitutions

- Subsituted MongoDB as the backend database.
- Added AXIOS to take advantage of it's expanded abilities beyod javascript's fetch().
- Added react-router-dom for its dynamic routing.
- Styled with react-boostrap, though not tested for responsivness.
- Added Concurrently so I could start up the front and backend together... Concurrently.

## Feature List

- Create, Read (all and one document), Update (all or one attribute), and Delete on the doggy_db database through frontend UI.
- Search for dogs by name (not case sensative)
- Sort list of dogs by gender, age, size.
- Limit page size to 3 or 10 dogs at a time, page numbers dynamically change.
- New dog form has frontend validation, and backend validation.
