const mongoose = require("mongoose");

const uri = "mongodb+srv://zayan:1122@cluster.mongodb.net/Locksmith?retryWrites=true&w=majority";

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected successfully!"))
  .catch((err) => console.error("Error connecting to MongoDB:", err.message));
