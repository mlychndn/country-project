const express = require("express");
const cors = require('cors');
const path = require('path');
const countryRouter = require("./routes/countryRoutes");
const app = express();

// middlewares
app.use(express.json());
app.use(express.static(path.join(__dirname,'public')));
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'))

app.use(cors({credentials: true, origin: true }));
//defining routes

app.get('/', (req, res,  next)=>{
    res.status(200).render('index.pug')
})

app.use("/api/v1/countries", countryRouter);

app.use('/images', express.static('images'));
module.exports = app;
