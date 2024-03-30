import express from "express"
import jwt from "jsonwebtoken"
import { JwtPayload } from "jsonwebtoken";



const router = express.Router();


router.route("/signin").post((req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    // do db validation here check password and email and fetch id of user

    const token = jwt.sign({id: 1}, "secret")

    const options = {
        httpOnly: true,
        secure : true
    }
    
    // will put the cookie in the set-cookie header
    res.cookie("token", token, options).json({message : "User signed in"})
})

router.route("/user").get((req, res) => {
    const token = req.cookies.token;

    if(!token){
        return res.status(401).json({message : "Unauthorized"})
    }   

    const decoded = jwt.verify(token, "secret") as JwtPayload;


    // get the user from the database using the decoded id


    res.json({userId: decoded.id})
})



router.route("/logout").post((req, res) => {
    res.clearCookie("token").json({message : "User logged out"})

    // set cookie to ""
})





export default router;