const express = require('express');

const app = express();

const bodyParser = require('body-parser');
const cors = require('cors');

const connectDB = require('./src/db/mongoose');

require('dotenv').config();
app.use(cors({ origin: 'http://localhost:3000', credentials: true }));

app.use(express.static('uploads'));

const graphqlHTTP = require('express-graphql');
const graphqlSchema = require('./src/graphql/schema/index');
const graphqlResolver = require('./src/graphql/resolvers/index');

const session = require('express-session');
const cookieParser = require('cookie-parser');

const auth = require('./src/middleware/auth');

connectDB();

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.use(session({
    secret: 'handshake_graphql',
    resave: false,
    saveUninitialized: false,
    duration: 60 * 60 * 1000,
    activeDuration: 5 * 60 * 1000,
    cookie: { maxAge: 60000 }
  }));

app.use(cookieParser('secret_cookie'));

app.use(auth);

// Define Routes
app.use('/graphql', (req, res) => {
    return graphqlHTTP({
      schema: graphqlSchema,
      rootValue: graphqlResolver,
      graphiql: true,
      context: { req, res },
    })(req, res)
  });
  
app.listen('3001', () => {
    console.log('Yelp backend running on port 3001');
});
