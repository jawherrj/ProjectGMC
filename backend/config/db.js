const mongoose =require ('mongoose')
const connect=async()=>{

try {
    await mongoose.connect(process.env.mongourl)
    console.log("data base is connected")
} catch (error) {
    console.log(error)
    
}

}
module.exports = connect