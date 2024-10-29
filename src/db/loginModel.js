import { Schema,model } from "mongoose";

const LoginSchema = new Schema({
    username:{type:String,require:true},
    mailid:{type:String,required:true,unique:true},
    password:{type:String,required:true}
})

const user = new model("user",LoginSchema);

export default user;