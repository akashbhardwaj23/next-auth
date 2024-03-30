import express from "express"
import cookieParser from "cookie-parser"  // parse the very long string and gets you an object
import cors from "cors"
import userRouter from "./routes/user"
import path from "path"



const app = express();

app.use(cookieParser());
app.use(express.json());
app.use(cors({
    credentials: true,
    origin: "http://localhost:5173"
}));



app.use("/api/v1/users", userRouter);



app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../src/index.html"))
})


app.listen(3000, () => {
    console.log("Server is running on port 3000")
})