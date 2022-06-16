import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const mongoDB_URI = process.env.MONGO_URI || "mongodb://localhost/PassportLocal+servidoresNode";
(async () => {
    try {
        const db = await mongoose.connect(mongoDB_URI)
        console.log('Conectado a mongoDB ' + db.connection.host + ':' + db.connection.port + '/' + db.connection.name);
    } catch (error) {
        console.log(error);
    }
})();