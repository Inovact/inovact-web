const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const users = require('./routes/api/users');
const projects = require('./routes/api/projects');
const ideas = require('./routes/api/ideas');
const teams = require('./routes/api/teams');
const user = require('./routes/api/user');
const app = express();
const multer = require('multer');
const upload = multer();

// Bodyparser middleware
app.use(cors());

app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(bodyParser.json());

//DB Config
const db = require('./config/dev').mongoURI;

// connect to MongoDB
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('MongoDB successfully connected'))
  .catch((err) => console.log(err));

mongoose.set('useFindAndModify', false);

// Passport middleware
app.use(passport.initialize());

// Passport config
require('./config/passport')(passport);

// Routes
app.use('/api/users', users);
app.use('/api/projects', projects);
app.use('/api/ideas', ideas);
app.use('/api/teams', teams);
app.use('/api/user', user);

const port = process.env.PORT || 5000;

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}
app.listen(port, () =>
  console.log(`Server is up and running on port ${port}!`)
);
