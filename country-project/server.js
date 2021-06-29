const dotenv = require('dotenv');
dotenv.config({path: './config.env'});
const mongoose = require('mongoose');


const app = require('./app');

// console.log(process.env.PORT);
const db = process.env.DB_URL.replace('<password>', process.env.DB_PASSWORD);

mongoose.connect(db,{
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    useCreateIndex: true
}).then(()=>{
    console.log('connection successful')
}).catch(err=>{
    console.log('err.message!');
})

let port = process.env.PORT || 8080;

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}....`);
});
