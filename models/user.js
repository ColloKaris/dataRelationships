const mongoose = require("mongoose");
mongoose
  .connect("mongodb://127.0.0.1:27017/relationshipDemo")
  .then(() => {
    console.log("MONGO CONNECTION OPEN");
  })
  .catch((err) => {
    console.log("OH NO MONGO CONNECTION ERROR!!!!");
    console.log(err);
  });

// Create a user Schema
  const userSchema = new mongoose.Schema({
  first: String,
  last: String,
  addresses: [
    {
      street: String,
      city: String,
      state: String,
      country: String,
    },
  ],
});

// Creae a model from the Schema
const User = mongoose.model('User', userSchema)

// Make a new User
const makeUser = async () => {
    const u = new User({
        first: 'Harry',
        last: 'Potter'
    })
    u.addresses.push({
        street: '123 Sesame St.',
        city: 'New York',
        state: 'NY',
        country: 'USA'
    })

    const res = await u.save()
    console.log(res)
}

makeUser()