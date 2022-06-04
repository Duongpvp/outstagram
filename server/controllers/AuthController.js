import UserModel from "../models/userModel.js";
import bcrypt from 'bcrypt';

export const registerUser = async(req,res) => {
    const {username, password, firstname, lastname} = req.body;

    const salt = await bcrypt.genSalt(10);
    const handlePass = await bcrypt.hash(password, salt);

    const newUser = new UserModel(
        {
            username, 
            password: handlePass, 
            firstname, 
            lastname
        }
    )

    try {
        await newUser.save()
        res.status(200).json(newUser)
    } catch(error) {
        res.status(500).json({mess: error.message})
    }
}

// Login User
export const loginUser = async (req,res) => {
    const {username, password} = req.body;

    try {
        const user = await UserModel.findOne({username: username});

        if(user){
            const validity = await bcrypt.compare(password, user.password)
            
            validity? res.status(200).json(user) : res.status(400).json("Something went wrong with Password")
        }
        else {
            res.status(404).json('User does not exist');
        }
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}