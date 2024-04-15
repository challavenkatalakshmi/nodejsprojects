// import mongoose from 'mongoose'
// const connectToMongoDB = async () =>{
//     try{
//         await connectToMongoDB.connect(process.env.MONGO_DB_URI)
//         console.log('connected to MongoDB');
//     }catch(error){
//         console.log('error connecting to MongoDB',error.message);
//     }
// }
// export default connectToMongoDB;

import mongoose from 'mongoose'

async function connectToMongoDB() {
    try {
        await mongoose.connect('mongodb+srv://user1:user1@cluster0.eozrchc.mongodb.net/', {
            // useNewUrlParser: true,
            // useUnifiedTopology: true,
            // Add other options if needed
        });
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error.message);
    }
}

export default connectToMongoDB;

