# Auction Display Project
Auction Display Project is a project created to help display exhibitor, buyer, addon buyer, and sale information during a county fair auction. The application is comprised of a front-end web application server, a back-end api server, and a database server that can all be run on a host machine inside of a local network. The system is designed to connect with other computers or Raspberry PI or similar devices that act as endpoints for displaying the data on a monitor(s).

## Technologies
Auction Display Project is built using a _**MEVN**_ stack which consists of:
* **MongoDB** ([NoSQL](https://www.mongodb.com/nosql-explained?jmp=footer)) for the database system and database server
* **Express.js** for the Node.js web application framework
* **Vue.js** for the front-end, client-side web server
* **Node.js** for the primary back-end server functionality

To learn more about the MEVN stack, and to see the tutorial we used as a foundation for starting this project, click [here](https://medium.com/@anaida07/mevn-stack-application-part-1-3a27b61dcae0).

## Getting Started
To get started, you will need to download and install MongoDB and Node.js on a host machine or virtual machine for the server. It should also work in a Docker container; however, this has not yet been tested.
* Install [MongoDB](https://docs.mongodb.com/manual/installation/) (created with version 3.0.15)
* Install [Node.js](https://nodejs.org/en/download/) (created with version 8.12.0)
* Install [Vue.js CLI 3](https://cli.vuejs.org/guide/installation.html) (created with version 2.9.6)
```bash
npm install -g vue-cli
```
* Clone the GitHub repository
```bash
git clone https://github.com/Cahough/Auction-Display-Project.git
```
* Install node modules for front and back-end servers

Go to client directory and install node modules
```bash
cd posts
cd client
npm install
```
Go to server directory and install node modules
```bash
cd posts
cd server
npm install
```

## Running
// Start MongoDB (link to install docs for specific OS)
// cd client npm run dev
// cd server npm start
// * Note to run all at once in seperate terminal instances

## Configuration
// Modify .env files with computer's hostname (recommended) or ip address
// bash hostname
// Change username and password in User collection using mongo shell or client such as Compass

---
## Contributors
// Link to GitHub contributors page

## License
// Code licensed under the <license>
