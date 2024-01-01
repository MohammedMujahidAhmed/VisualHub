import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { User } from './models/User.js';
import { Problem } from './models/Problem.js';
import { generateChatResponse } from './chatai.js';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import { promisify } from 'util';
import { Chat } from './models/Chat.js';
import { Alg } from './models/Statistics.js';
import helmet from 'helmet';


dotenv.config();
const app = express();


const jwtSecret = "heyuwfdbweh63287bx3";

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    credentials: true,
    origin: 'http://localhost:5173',
}));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(helmet()); 

mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(()=>{console.log('Connected to db successfully')})
.catch((err)=>{
    console.log('Issues in connectig with db');
    // console.error(err); 
}) ;
 
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Connection error:'));
db.once('open', async () => {
    console.log('Connected to MongoDB!');
    // Your code here
});

app.post('/chatai', async (req, res) => {
    try {
        const { msg } = req.body;

        const msgAi = process.env.MY_PROMPT + '\n\n' + msg;
        const assistantResponse = await generateChatResponse(msgAi);

        const parsedResponse = JSON.parse(assistantResponse);

        console.log(parsedResponse);

        return res.json({
            parsedResponse,
        });
    } catch (error) {
        console.error("Error handling /chatai:", error.message);
        return res.status(500).json({ error: "Internal Server Error" });
    }
});

app.post('/register', async (req, res) => {
    const { name, email, password } = req.body;

    const pass = await bcrypt.hash(password, 10);


    try {

        if (!name || !email || !password) {
            return res.status(400).json({
                success: false,
                message: 'All fields are required',
            });
        }

        
        const user = await User.create({
            name,
            email,
            password: pass,
        });
        
        console.log(user);

        res.json({
            success:true,
            message:'Registration Succesfull',
            user,
        });
    }
    catch (e) {
        return res.status(422).json(e);
    }
});



app.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });

        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: 'All Fields are Required',
            });
        }

        if (!user) {
            return res.status(400).json({
                success: false,
                message: 'Please Register First',
            })
        }

        if (await bcrypt.compare(password, user.password)) {

            const payload = {
                email: user.email,
                id: user._id,
            }

            const token = jwt.sign(payload, jwtSecret, {
                expiresIn: "8h",
            });

            user.token = token;

            let options = {sameSite:'none',secure:true};

            res.cookie('token',token,options).status(200).json({
                success:true,
                user,
                token,
                message:'Successfully LogIn',
            });

            console.log(token);
        }
        else {
            res.status(422).json({
                success:false,
                message:'Password Not matched',
            });
        }

    }
    catch (e) {
        res.status(403).json({
            success: false,
            message: 'Logined Failed'
        })
    }
})


app.get('/profile', async (req, res) => {
    const { token } = req.cookies || req.body.token;
    
    if ( !token ){
        console.log('Token Not found');
        return res.status(401).json({ 
            success:false,
            message:'Token Not found'
        })
    }

    if(token){
        jwt.verify(token,jwtSecret,{},async (err,userData)=>{
            if (err) throw err

            const {name,email,_id} = await User.findById(userData.id);
            res.status(200),json({
                success:true,
                message:'In profile',
                name,
                email,
                _id
            })
        })
    }


    // try{

    //     const payload = jwt.verify(token, jwtSecret);

    //     const user = User.findOne({email:payload.email});

    //     console.log(payload);

    //     return res.status(200).json({
    //         success:true,
    //         message:'Profile page here',
    //         user,
    //         name:user.name,
    //     })

    // }catch{
    //     return res.status(400).json({
    //         success:false,
    //         message:'The profile page is not working',
    //     });
    // }

})

app.post('/logout', async (req, res) => {

    res.clearCookie('token', {
        path: '/',
        sameSite: 'none',
        secure: true,
        httpOnly: true,
    });

    res.status(200).json({
        success : true, 
        message : 'Logout successful', 
    });
});


// app.post('/createProblem', async (res,req)=>{

//     const { link , isCompleted } = req.body;

//     const problem = await Problem.create({
//         link,
//         isCompleted
//     });

//     res.status(200).json({
//         success:true,
//         message:'Create Problem Successful',
//         problem,
//     });

// } )



// app.post('/UploadChatAi', async (req, res) => {
//     try {
//         const { chatLink, msg } = req.body;
        
//         const { token } = req.cookies;

//         const payload = jwt.verify(token, jwtSecret);

//         const user = await User.findOne({ email: payload.email });

//         if (!user) {
//             return res.status(404).json({ error: 'User not found' });
//         }

//         const newChat = new Chat({
//             link:chatLink,
//             text: msg,
//         });

//         await newChat.save();

//         user.chat.push(newChat._id);
//         await user.save();

//         res.status(201).json({ message: 'Chat uploaded successfully' });
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ error: 'Internal Server Error' });
//     }
// });

app.post('/UploadChatAi', async (req, res) => {
    try {
        const { chatLink, msg } = req.body;
        
        const { token } = req.cookies;

        const payload = jwt.verify(token, jwtSecret);

        const user = await User.findOne({ email: payload.email });

        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        const newChat = new Chat({
            link:chatLink,
            text: msg,
        });

        await newChat.save();

        user.chat.push(newChat._id);
        await user.save();

        res.status(201).json({ message: 'Chat uploaded successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


app.post('/getChats',async (req,res)=>{
    
    const {token} = req.cookies;

    if(!token){
        res.status(500).json({
            success:false,
            message:'Token not Found in getChats'
        });
    }

    const payload = jwt.verify(token, jwtSecret);

    const user = await User.findOne({ email: payload.email }).populate('chat');

    const chats = user.chat;

    res.status(200).json({
        success:true,
        message:'Chats',
        chats      
    });

})

app.post('/countAlg', async (req, res) => {
    try {
        const { algorithmName } = req.body;

        console.log(algorithmName);

        const alg = algorithmName.toLowerCase().replace(/\s/g, '');

        console.log(alg);

        const { token } = req.cookies;

        const payload = jwt.verify(token, jwtSecret);

        const user = await User.findOne({ email: payload.email });

        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        // Find the matching algorithm in the Alg schema and increment its count
        const algorithmField = `${alg}`; // Convert algorithm name to field name

        if (user.Alg) {
            // If the user already has an Alg document, update the count
            await Alg.updateOne(
                { _id: user.Alg },
                { $inc: { [algorithmField]: 1 } }
            );
        } else {
            // If the user doesn't have an Alg document, create one and update the count
            const newAlg = new Alg();
            newAlg[algorithmField] = 1;
            await newAlg.save();

            // Update the user document with the reference to the new Alg document
            user.Alg = newAlg._id;
            await user.save();
        }

        res.status(201).json({ message: 'Count incremented successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.post('/statistics', async (req, res) => {
    const { token } = req.cookies;

    if (!token) {
        return res.status(500).json({
            success: false,
            message: 'Token not Found in getChats',
        });
    }

    try {
        const payload = jwt.verify(token, jwtSecret);
        const user = await User.findOne({ email: payload.email }).populate('Alg');

        // Access the Alg object for the user
        const algData = user.Alg;

        // Access the individual algorithm counts
        const {
            linearsearch,
            binarysearch,
            bubblesort,
            selectionsort,
            mergesort,
            quicksort,
            heapsort,
            insertionsort,
        } = algData;

        res.status(200).json({
            success: true,
            message: 'Alg',
            algCount: {
                linearsearch,
                binarysearch,
                bubblesort,
                selectionsort,
                mergesort,
                quicksort,
                heapsort,
                insertionsort,
            },
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: 'Error retrieving algorithm counts',
        });
    }
});


app.listen(5000);
