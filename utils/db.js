const mongoose = require('mongoose');

const connect = async () => {
    return await mongoose.connect(process.env.DB || 'mongodb://localhost:27017/elidata', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
    });
};

module.exports = {
    connect
};