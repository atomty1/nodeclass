const express = require("express");
const app = express();
const path = require("path");
const session = require("express-session");
app.set("view engine", "ejs");

app.set("views", path.join(__dirname, 'views'));
app.use(express.static("uploads"));
app.use(express.static("static"));
app.use(session({secret: "taye"}));

const port = process.env.PORT || 8000;
let name = "Taye Abidakun";
let dept= "software";
let names = ["Tosin", "Ola", "Taye", "Quozeem"];
app.get("/", (req, res)=>{
    let num = Math.floor(Math.random() * 10);
   req.session.myName= "Abidakun";
    res.render("display", {name, dept, num, names});
});
app.get("/about", (req, res)=>{
    res.render("about", {name: req.session.myName});
}); 
app.listen(8000, ()=>{
    console.log("I am anything running on port 8000"); 
 })

// let storage = multer.diskStorage({
//     filename: (req, file, cb)=>{
//         let fileName = file.originalname;
//         let filenameArr = fileName.split(".");
//         let ext = filenameArr[filenameArr.length-1];
//         cb(null, "pics"+Date.now()+"."+ext);
//     },
//     destination: (req, file, cb)=>{
//         cb(null, "images/");
//     }
// });
// const fileFilter = (req, file, cb)=>{
//    if(file.mimetype==="image/jpeg"||file.mimetype==="image/png"
//    ||file.mimetype==="image/jpg"){
//     cb(null, true);
//    } else{
//     req.error = {message: "file not supported"};
//     cb(null, false);
//    }

// }
// let myUploads= multer({storage, fileFilter })


// app.use(cors());


// app.post("/picture-upload", myUploads.single("img"), (req, res)=>{
//     console.log("body", req.body.name);
//      console.log("my error", req.error);
//     if(req.error){
//      res.send(req.error.message);
//     }else{
//         res.send("Success");
//     }
   
// });
// app.post("/test", (req, res)=>{

// })

;
// let users = [
//     {
//         id: 1,
//         name: "Taye",
    
//     },
//     {
//         id: 2,
//         name: "Kenny"
//     },
//     {
//         id: 3,
//         name: "Idowu"
//     }
// ]
// const myErrorFunc = myFunc=>{
//     return (req, res, next)=>{
//         myFunc(req, res, next).catch(err=>next(err));
//     }

// }
// app.get("/user/:id",  myErrorFunc(async(req, res, next)=>{
//     let {id} = req.params;
//         let user = users.find(eachUser=>eachUser.id==id);
//         if(!user) throw new AppError("User not found", 404);
//         res.json(user);
// }));

// const validationError = ()=>{
//     return 400;
// }
// app.use((error, req, res, next)=>{
//     let {status=500, message="Something went wrong"} = error;
//    if(error.name ==="ValidationError") {
//        status = validationError();
//    }
    
//    res.status(status).send(message);

// })













 
// const bcrypt = require("bcrypt");
// const {connect, Schema, model} = require("mongoose");

// connect(process.env.MONGODB_URI)
// .then(res=>console.log("Connected successfully"))
// .catch(err=>console.error(err));

// let studentSchema = new Schema({
//     name: {
//         type: String,
//         required: true
//     },
//     age: {
//         type: Number,
//         default: 10
//     },
//     password: {
//         type: String,
//         minLength: 8,
//         required: true
//     },
    
// });
// let Student = model('Student', studentSchema);
// let courseSchema = new Schema({
//     code: {
//         type: String,
//         required: true
//     },
//     title: {
//         type: String,
//         required: true
//     },
//    studentId: {
//         type: Schema.Types.ObjectId,
//         ref: Student
//     }
// });


// Entity relationship
// One to one
// one to many
// many to one
// many to many


// let Course = model("Course", courseSchema);

// const app = express();

// app.use(express.urlencoded({extended: true}));

// app.get("/", (req, res)=>{
//     res.send("Welcome Taye Abidakun");
// });
// app.post("/register", async (req, res)=>{
//     try {
//         let {username, password, age} = req.body;
//         let newStudent = Student({name: username, password, age});
//         newStudent.save();
//         console.log("successful");
//         res.send('Registration successful');
//     } catch (error) {
//         console.error(error);
//         res.send("Something went wrong");
//     }
    
    // let myUser = users.find(user=>user.username===username);
    // if(myUser){
    //     res.send("Username already exist");
    // } else{
    //     let id = users.length+1;
    //     let salt =await bcrypt.genSalt();
    //     let myPassword = await bcrypt.hash(password, salt);
    //     users.push({...req.body, id, password: myPassword});
    //     res.send("User added successfully");
    // }
   
// });
// app.post("/login", async(req, res)=>{
//     let {username, password} = req.body;
//    let foundStudent = await  Student.findOne({name: username, password});
//    if(foundStudent){
//         res.json(foundStudent);
//    }else{
//     res.send("Username or password is incorrect");
//    }
    // let loginUser = users.find(user=>user.username===username);
    // if (!loginUser)  return res.send('User does not exist');
    //     let comparePassword = await bcrypt.compare(password, loginUser.password);
    //     if(comparePassword) return res.send("Login successful");
    //     res.send("Incorrect password");
// })
// app.get("/get-users",async (req, res)=>{
//    let foundStudents =  await Student.find({}).select("name age");
//    res.json(foundStudents);
// });
// app.get("/get-user/:id", async (req, res)=>{
//    let {id} = req.params;
//    console.log(id);
//    let user = await Student.findById(id);
//    console.log(user);
//    res.json({user});
// });
// app.post("/register-courses/:id", (req, res)=>{
//     let {title, code} = req.body;
//     let newCourse = Course({title, code});
//     newCourse.studentId = req.params.id;
//     newCourse.save();
//     res.send("Course added successfully");
// });
// app.get("/fetch-course/:course_id", async (req, res)=>{
//     let {course_id} = req.params;
//     let course = await Course.findById(course_id).populate("studentId");
//     console.log(course);
//     res.json(course);
// })


