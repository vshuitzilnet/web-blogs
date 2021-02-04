const { Router } = require('express');
const router = Router();


//Actually this logic and methods we need to move it to Controllers and differents files for users and blogs, but for the time I has to do it of this form
const User = require('../models/user.model');
const Blog = require('../models/blog.model');

const jwt = require('jsonwebtoken');


router.post('/logup',  async function(req,res) {
    const {name, user, password, email}= req.body;
    const newUser = new User({name, user, password, email}) 
    await newUser.save();


    //We need this token for authentication

    const token = jwt.sign({_id: newUser.id}, 'thisisasecreatKey')
    res.status(200).json({token});
});

//This function is for verify if the user data is correct or not. If the password not are the same this function returns
// an error

router.post('/login', async function(req, res){
    const {user, password} = req.body;
    const username = await User.findOne({user})

    if(!username) return res.status(401).send("User dosen't exist")
    if(username.password!== password) return res.status(401).send("User exist but the password is wrong")
})

//using async await this code can continue working waiting in the same time

router.get('/users', async function(req, res){
    await User.find( function( err, users){
        if(err){
            res.send(err);
        }
        res.json(users);
    })
});


//Get or find user BY ID
router.get('/user/:id', async function(req, res){
   await  User.findById(req.params.id, function(err, user) {
      
    if (err){ //if exist any error
      res.send(err);
    } //else return the user found by ID
    res.json(user)
    })
});


router.get('/blogs/:autorId', async function(req, res){
    const autor = req.params.autorId;
    const blog = await Blog.findOne({autor})

    if(!blog) return res.status(401).send("This autor dosent have blogs")
    return res.status(401).send(blog)
})

//Put user BY ID
router.put('/user/:id', async function(req, res){
    await  User.findById(req.params.id, function(err, user) {

     if (err){ 
       res.send(err);
     } 
     //Modify and save
     user = req.body;
     user.save( function(err){
        if(err){
            res.send(err);
        }
        res.json(user);
    });
 });
});

//Delete
router.delete('/user/:id', async function(req, res){
    await  User.findById(req.params.id, function(err, user) {
        if (err){ 
        res.send(err);
        } 
        user.remove(function(err){
            if(err){
                res.send(err);
            }
        })
    });
});






/*
//This GET is the second part only for admins. This is the best option but I didn't have time for finish it :( )

router.get('/users', authorizationVerify, function(req, res){
    User.find( async function( err, users){
        if(err){
            res.send(err);
        }
        res.json(users);
    })
});*/

//SECTION FOR BLOGS
//I need separate BLOGS and USERS

router.post('/blog',  async function(req,res) {
    const {title, autorId, text}= req.body;
    const newBlog = new Blog({title, autorId, text}) 
    await newBlog.save(function(err, blog){
        if(err){
            res.send(err)
        }
        res.json(blog);
    });

});

//This function is for verify if the user data is correct or not. If the password not are the same this function returns
// an error



//using async await this code can continue working waiting in the same time

router.get('/blogs', async function(req, res){
    await Blog.find( function( err, blogs){
        if(err){
            res.send(err);
        }
        res.json(blogs);
    })
});


//Get or find user BY ID
router.get('/blog/:id', async function(req, res){
   await  Blog.findById(req.params.id, function(err, blog) {
      
    if (err){ //if exist any error
      res.send(err);
    } //else return the user found by ID
    res.json(blog)
    })
});


//Put user BY ID
router.put('/blog/:id', async function(req, res){
    await  Blog.findById(req.params.id, function(err, blog) {

     if (err){ 
       res.send(err);
     } 
    
     blog = req.body;
     blog.save( function(err){
        if(err){
            res.send(err);
        }
        res.json(user);
    });
 });
});

//Delete
router.delete('/blog/:id', async function(req, res){
    await  Blog.findById(req.params.id, function(err, blog) {
        if (err){ 
        res.send(err);
        } 
        blog.remove(function(err){
            if(err){
                res.send(err);
            }
            res.send("Blog deleted");
        })
    });
});




module.exports = router; 

//This function verify if the user has authorization for especific urls 

function authorizationVerify(req, res, next){
     if(!req.headers.authorization){
         return res.status(401).send('You dont have authoritation')
     }

     const token = req.headers.authorization.split(' ')[1];
     if(token === 'null'){
         return res.status(401).send("You dont have authoritation")
     }
     
     const payload = jwt.verify(token, 'thisisasecreatKey');
     req.userId = payload._id;
     next();
}