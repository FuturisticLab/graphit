// Test setup file
// This file runs before all tests
require('dotenv').config();
const mongoose = require('mongoose');

// Connect to test database
beforeAll(async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/graphit-test', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('Connected to test database');
  } catch (error) {
    console.error('Test database connection failed:', error);
  }
});

// Clean up after all tests
afterAll(async () => {
  try {
    await mongoose.connection.dropDatabase();
    await mongoose.connection.close();
    console.log('Test database dropped and connection closed');
  } catch (error) {
    console.error('Error cleaning up test database:', error);
  }
});