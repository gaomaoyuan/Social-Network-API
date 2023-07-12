const mongoose = require('mongoose');
const User = require('./models/user'); 

mongoose.connect('mongodb://localhost/social-network-api', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const userSeed = [
  {
    username: 'JohnDoe',
    email: 'john@doe.com',
  },
  {
    username: 'JaneDoe',
    email: 'jane@doe.com',
  },
];

User.deleteMany({})
  .then(() => User.insertMany(userSeed))
  .then((data) => {
    console.log(data.length + ' records inserted!');
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
