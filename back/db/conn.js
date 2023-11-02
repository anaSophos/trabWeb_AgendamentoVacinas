import mongoose from 'mongoose';

const conn = async ()=>{
    try {
        const urlDB = process.env.DATABASE_URL
        await mongoose.connect(urlDB,{
            useUnifiedTopology: true,
            useNewUrlParser: true
        })
        
    } catch (e) {
        console.log(e)
    }
}

export default conn