import mongoose from "mongoose";
import { friendSchema } from "../mongoSchemas/friendSchema.js";
import  {seriesSchema } from "../mongoSchemas/seriesSchema.js"
import { environment }  from "../app-config.js";

const env = process.env.NODE_ENV || "development";

/**
 * Mongoose Connection
**/

/*
mongoose.connect(environment[env].dbString, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});*/

const MONGO_DB_URI = process.env.MONGO_URI

mongoose.connect(MONGO_DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});




let db = mongoose.connection;
db.on('error', () => {
    console.error("Error while connecting to DB");
});

const Friends = mongoose.model('Friends', friendSchema);
const Series = mongoose.model('Series', seriesSchema);

export { Friends, Series };