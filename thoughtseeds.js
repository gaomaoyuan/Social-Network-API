const  Thought  = require('./models/thought');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/social-network-api', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const thoughtSeed = [
  {
    thoughtText: 'I love coding!',
    username: 'user1',
    userId: '<user_id>'
  },
  {
    thoughtText: 'JavaScript is my favorite language',
    username: 'user2',
    userId: '<user_id>'
  },
  {
    thoughtText: 'Node.js makes backend development easier',
    username: 'user3',
    userId: '<user_id>'
  },
  {
    thoughtText: 'MongoDB is a powerful NoSQL database',
    username: 'user4',
    userId: '<user_id>'
  }
];

Thought.deleteMany({})
  .then(({ deletedCount }) => {
    console.log(`Deleted ${deletedCount} thoughts`);
    return Thought.insertMany(thoughtSeed);
  })
  .then(data => {
    console.log(data.length + ' thoughts inserted!');
    process.exit(0);
  })
  .catch(err => {
    console.log(err);
    process.exit(1);
  });

