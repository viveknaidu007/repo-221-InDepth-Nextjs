const { default: mongoose } = require("mongoose");


const mobileSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true,
    }, 
    price:{
        type:String,
        required: true,
    }, 
    image:{
        type:String
    }
})

const MobileModel = mongoose.models.mobile || mongoose.model('mobile', mobileSchema);

export default MobileModel;