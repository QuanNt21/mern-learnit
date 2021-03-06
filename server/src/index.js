const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

const route = require('./routes');

dotenv.config();

const connectDB = async () => {
    try {
        await mongoose.connect(
            `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@mern-learnit.hrzpvzf.mongodb.net/mern-learnit?retryWrites=true&w=majority`,
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            }
        );

        console.log('MongoDB connected');
    } catch (error) {
        console.log(error.message);
        process.exit(1);
    }
};

connectDB();

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

// Routes init
route(app);

app.listen(port, () => console.log(`App listening at http://localhost:${port}`));
