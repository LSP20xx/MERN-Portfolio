const mongoose = require("mongoose");

const connectToDb = async () => {
  try {
    const conn = await mongoose.connect("mongodb://127.0.0.1:27017/contact_form", {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline.bold);
  } catch (error) {
    console.error(`Error: ${error.message}`.red);
    process.exit(1);
  }
};

module.exports = connectToDb;