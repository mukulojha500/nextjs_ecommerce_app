import mongoose from 'mongoose';

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('connection successful');
    } catch (error) {
        console.log(error);
    }
}

export default connect;
