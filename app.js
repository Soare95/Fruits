
const mongoose = require("mongoose"); 
mongoose.connect("mongodb://localhost:27017/fruitsDB");

const fruitSchema = new mongoose.Schema({
  name: {
    type: String,
    // required: [true, "Please add a name of your fruit!"]
  },
  rating: {
    type: Number,
    min: 1,
    max: 10
  },
  review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);
const fruit = new Fruit ({
  name: "Apple",
  rating: 5,
  review: "Middle"
});

// fruit.save();

const personSchema = new mongoose.Schema({
  name: String,
  age: Number,
  favoriteFruit: fruitSchema
});

const avocado = new Fruit({
  name: "Avocado",
  rating: 4,
  review: "Bad fruit"
});

avocado.save()

const Person = mongoose.model("Person", personSchema);
const person = new Person ({
  name: "Amy",
  age: 12,
  favoriteFruit: avocado
});

// person.save();

Fruit.find(function(err, fruits) {
    if (err) {
      console.log(err);
    } else {

      // mongoose.connection.close();

      fruits.forEach(function(fruit) {
        console.log(fruit.name);
      });
    }
});

// Fruit.updateOne({_id: "61a12c6b9102d9cd58e5fb0c"}, {name: "Broccoli"}, function(err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Successfully updated the document.");
//   }
// });

Person.updateOne({_id: "61a1024f44c7aa9e13e7554a"}, {favoriteFruit: avocado}, function(err) {
  if (err) {
    console.log(err);
  } else {
    console.log("Successfully updated the document.");
  }
});

// Fruit.deleteOne({_id: "61a10d620281bc4b839f4ea6"}, function(err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Successfully deleted the document");
//   }
// });
