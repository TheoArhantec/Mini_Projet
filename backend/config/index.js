require('dotenv').config()

const PORT = process.env.PORT;
const MONGODB_URI = process.env.MONGODB_URI;
const MONGODB_DB = process.env.MONGODB_DB;

module.exports = {
    PORT,
    MONGODB_URI,
    MONGODB_DB
}