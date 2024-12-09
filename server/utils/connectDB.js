import mongoose from 'mongoose';



export const ConnectDb=async()=>{
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL,{
            useNewUrlParser:true,
            useUnifiedTopology:true
        })
        if(conn){
            console.log("MongoDB Is Connected");
        }
    } catch (error) {
        console.error("Error in ConnectDB",error)
    }
}

//Agr mongodb ka error aye try mongod in cmd or try changing the env variable from localhost to 0.0.0.0