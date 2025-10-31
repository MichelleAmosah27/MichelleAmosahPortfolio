
import jwt from "jsonwebtoken";

const generateToken = (userInformation) =>{

    //one function with 3 parameters
    //visit json web token to see more options

    return jwt.sign( {
        
        //information to encrypted in the token also known as payload
        id: userInformation.id,
        email: userInformation.email,
        userName: userInformation.userName

    },
    //secret to encrypte the above information. Can be something that only our code know
    //you always need this very the users information
    process.env.JWT_SECRET,
    {
        expiresIn:'30d'
    }

    );
}

export default generateToken;