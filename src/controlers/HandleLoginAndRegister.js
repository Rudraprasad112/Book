import httpStatus from 'http-status'
import user from '../db/loginModel.js'

import bcrypt from 'bcrypt'

const register = async (req, res) => {
    const { username, mailid, password } = req.body;
    
    
    try {
        console.log("entered");
        
        let existmails = await user.findOne({mailid});
        if(existmails){
            
            return res.status(httpStatus.FOUND).json({message:"user alerady exists"});

        }
        // user not exist
        let salt = await bcrypt.genSalt(10);
        const hasPassword = await bcrypt.hash(password,salt);
        const newUser = new user({
            username:username,
            mailid:mailid,
            password:hasPassword
        })
        await newUser.save();
       
        

        res.status(httpStatus.CREATED).json({ message: "Registered sucess" })

    } catch (error) {
        res.send(error)
    }
}
const login = async (req, res) => {

    const { mailid, password } = req.body;

    if (!mailid || !password) {

        return res.status(400).json({ message: "Please Provide " });
    }
    try {

        let userFound = null;
         userFound = await user.findOne({ mailid });
         console.log(userFound);
         
        if (userFound == null) {
            
            
           return res.status(httpStatus.NOT_FOUND).json({message:"username not found"})
           
           
        }
        //hasing password
        
       
        let isPasswordCorrect = await bcrypt.compare(password,userFound.password);
        if(isPasswordCorrect == true){//password is currect
            
            await userFound.save();
            console.log({message:"login sucessfully"});
            
            res.send(httpStatus.OK).json({message:"login sucessfully"});

        }else{

            res.status(httpStatus.NOT_FOUND).json({message:"invalid username and password"});

            console.json({message:"invalid username and password"});
            
        }
        
        
    } catch (error) {
        return res.json({ message: `Somthing went wrong${error}`});
    }
}
export  {register,login}
