const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/freelancing_platform', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

// User schema
const userSchema = new mongoose.Schema({
  username: String,
  email: { type: String, unique: true },
  password: String,
  usertype: String
});

const User = mongoose.model('User', userSchema);

// Check users
User.find({}).then(users => {
  console.log('Current users in database:', users.length);
  if (users.length === 0) {
    console.log('No users found. Creating sample users...');

    // Create sample users
    const sampleUsers = [
      { username: 'admin', email: 'admin@example.com', password: 'admin123', usertype: 'admin' },
      { username: 'john_freelancer', email: 'john@example.com', password: 'john123', usertype: 'freelancer' },
      { username: 'sarah_client', email: 'sarah@example.com', password: 'sarah123', usertype: 'client' }
    ];

    User.insertMany(sampleUsers).then(() => {
      console.log('Sample users created successfully!');
      console.log('You can now login with:');
      console.log('- admin@example.com (admin)');
      console.log('- john@example.com (freelancer)');
      console.log('- sarah@example.com (client)');
      process.exit(0);
    }).catch(err => {
      console.log('Error creating users:', err);
      process.exit(1);
    });
  } else {
    users.forEach(user => console.log('- ' + user.email + ' (' + user.usertype + ')'));
    process.exit(0);
  }
}).catch(err => {
  console.log('Error:', err);
  process.exit(1);
});