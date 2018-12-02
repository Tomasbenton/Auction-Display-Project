// Define Constants
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const exhibitorRoutes = require('../exproutes/exhibitor.route');
const buyerRoutes = require('../exproutes/buyer.route');
const userRoutes = require('../exproutes/user.route');
const transactionRoutes = require('../exproutes/transaction.route');
require('dotenv').config();

// Express.js
const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())
app.use('/exhibitor', exhibitorRoutes);
app.use('/buyer', buyerRoutes);
app.use('/user', userRoutes);
app.use('/transaction', transactionRoutes);

// Mongodb / Mongoose
var mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost:27017/auctiondb');
mongoose.connect(`mongodb://${process.env.HOST_NAME}:27017/auctiondb`);
var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));
db.once("open", function(callback){
  console.log("Database connection Succeeded");
});

// Create User Collection
db.createCollection("User", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["username", "password"],
      properties: {
        username: {
          bsonType: "string",
          description: "must be a string and is required"
        },
        password: {
          bsonType: "string",
          description: "must be a string and is required"
        }
      }
    }
  }
})
// Create Exhibitor Collection
db.createCollection("Exhibitor", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["saleNumber", "fullName", "tag", "species"],
      properties: {
        saleNumber: {
          bsonType: "number",
          description: "must be a number and is required"
        },
        fullName: {
          bsonType: "string",
          description: "must be a string and is required"
        },
        tag: {
          bsonType: "string",
          description: "must be a string and is required"
        },
        species: {
          bsonType: "string",
          description: "must be a string and is required"
        },
        animalDescription: {
          bsonType: "string",
          description: "must be a string and is not required"
        },
        checkInWeight: {
          bsonType: "number",
          description: "must be a number and is not required"
        },
        clubName: {
          bsonType: "string",
          description: "must be a string and is not required"
        },
        showClassName: {
          bsonType: "string",
          description: "must be a string and is not required"
        },
        placing: {
          bsonType: "string",
          description: "must be a string and is not required"
        },
        buyback: {
          bsonType: "number",
          description: "must be a number and is not required"
        }
      }
    }
  }
})
// Create Buyer Collection
db.createCollection("Buyer", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["bidderNumber", "name", "contactName", "phone"],
      properties: {
        bidderNumber: {
          bsonType: "number",
          description: "must be a number and is required"
        },
        name: {
          bsonType: "string",
          description: "must be a string and is required"
        },
        contactName: {
          bsonType: "string",
          description: "must be a string and is required"
        },
        phone: {
          bsonType: "string",
          description: "must be a string and is required"
        },
        email: {
          bsonType: "string",
          description: "must be a string and is not required"
        },
        logoFilename: {
          bsonType: "string",
          description: "must be a string and is not required"
        }
      }
    }
  }
})
// Create Transaction Collection
db.createCollection("Transaction", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["saleNumber", "bidderNumber", "purchaseAmount", "purchaseType"],
      properties: {
        saleNumber: {
          bsonType: "number",
          description: "must be a number and is required"
        },
        bidderNumber: {
          bsonType: "number",
          description: "must be a number and is required"
        },
        purchaseAmount: {
          bsonType: "number",
          description: "must be a number and is required"
        },
        purchaseType: {
          bsonType: "string",
          description: "must be a string in enum {Buyer, Addon} and is required"
        }
      }
    }
  }
})

// Node API endpoint
var port = process.env.PORT || 8081
app.listen(port, function(){
  console.log('Node.js is listening on port', port);
});
