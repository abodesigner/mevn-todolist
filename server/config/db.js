const mongoose = require("mongoose");

const connect = async () => {
    try {
        const isValid = await mongoose.connect('mongodb://localhost:27017/myapp', {useNewUrlParser: true, useUnifiedTopology: true})
        if ( isValid ) {
            //console.log("DB Connected successfully");
        }

    } catch (error) {
        console.log(error);
    }
}

connect();

