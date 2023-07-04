import mongoose from 'mongoose'

const DBConnection = async ()=>{
    const DB_URL=`mongodb+srv://nehasvermaind:Sneha123@file-upload.y4tpjro.mongodb.net/?retryWrites=true&w=majority`;
    try {
        await mongoose.connect(DB_URL,{ useNewUrlParser : true });
        console.log('Database Connected Successfully');
    } catch (error) {
        console.error('Error while connecting to database',error.message)
    }
}
export default DBConnection;