var mongoose = require('mongoose')

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      'mongodb+srv://proshopusr:proshopusr@proshop-cluster.t0yqf.mongodb.net/proshop?retryWrites=true&w=majority',
      {
        useUnifiedTopology: true,
        useNewUrlParser: true,
      }
    )

    //the cyan underline, comes from the colors library that got installed with npm i colors
    console.log(`MongoDB Connected: ${conn.connection.host}`)
  } catch (error) {
    console.error(`Error: ${error.message}`)
    process.exit(1) //Exit with failure.
  }
}
module.exports = connectDB
