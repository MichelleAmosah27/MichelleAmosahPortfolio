
//  import jwt from "jsonwebtoken";

// const authMiddleware = (req, res, next) =>{
    
//      const token = req.headers.authorization?req.headers.authorization.split(" ")[1]:null;

//     if(!token){
//         return res.status(401).json({message: "Unauthorized"});
//     }
//     try {

//         const decoded = jwt.verify(token, process.env.JWT_SECRET);
//         req.user = decoded;
//         next();
        
//     } catch (error) {
//         return res.status(401).json({message: "Invalid Token"})
//     }
//  }

//  export default authMiddleware;


import jwt from "jsonwebtoken";

const authMiddleware = (isAdmin = false) => {
    return (req, res, next) => {
        const authHeader = req.headers.authorization;
        const token = authHeader ? authHeader.split(" ")[1] : null;

        if (!token) {
            return res.status(401).json({ message: "Unauthorized: No token" });
        }

        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            req.user = decoded;

            // Check admin access if required
            if (isAdmin && req.user.role !== "admin") {
                return res.status(403).json({ message: "Forbidden: Admins only" });
            }

            next();
        } catch (error) {
            return res.status(401).json({ message: "Invalid Token" });
        }
    };
};

export default authMiddleware;
