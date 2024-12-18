const express = require('express')
const router = express.Router()
const User = require('../models/users')
const multer = require('multer')

// image upload 
var store = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads'); // Ensure this path exists
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + "_" + Date.now() + "_" + file.originalname);
    }
});


const upload = multer({
    storage: store,
    fileFilter: (req, file, cb) => {
        if (file.mimetype.startsWith('image/')) {
            cb(null, true); // Accept image files
        } else {
            cb(new Error('Invalid file type. Please upload an image.'));
        }
    },
}).single('image');

// insert an user into the database route 
router.post('/add', upload, async (req, res) => {
    try {
        const user = new User({
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            image: req.file.filename,
        });
        
        // Save user using async/await
        await user.save();

        // Set success message
        req.session.message = {
            type: 'success',
            message: 'User added successfully',
        };
        
        res.redirect('/');
    } catch (err) {
        res.json({ message: err.message, type: 'danger' });
    }
});



// home page 
// router.get('/',(req,res)=>{
//     // res.send("Home page")
//     res.render("index",{title : 'Home Page'})
// })

// Fetch and render users
router.get('/', async (req, res) => {
    try {
        const users = await User.find(); // Fetch all users
        res.render('index', {
            title: 'Home Page',
            users: users, // Pass users to the template
            message: req.session.message || null
        });
    } catch (err) {
        console.error('Error fetching users:', err);
        res.status(500).send('Error fetching users');
    }
});



//add 
router.get('/add',(req,res)=>{
    res.render("addusers",{title:"Add users"})
})

//edit
// Edit route
router.get('/edit/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const user = await User.findById(id); // Use async/await here

        if (!user) {
            // If no user is found, redirect to home
            req.session.message = {
                type: 'danger',
                message: 'User not found',
            };
            return res.redirect('/');
        }

        // Render edit page with the user details
        res.render('edituser', {
            title: "Edit User",
            user: user,
        });
    } catch (err) {
        console.error('Error finding user:', err);
        req.session.message = {
            type: 'danger',
            message: 'Error fetching user details',
        };
        res.redirect('/');
    }
});


module.exports = router
