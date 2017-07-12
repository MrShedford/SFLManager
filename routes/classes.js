var express = require('express');
var router = express.Router();
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var fileUpload = require('express-fileupload');
var mkdirp = require('mkdirp');
var path = require('path');



//This will manage all the class routing 
var User = require('../models/user');
var Student = require('../models/students');
var ClassStore = require('../models/classes');
var Enrolled = require('../models/enrolled');


//This handles file uploading from Teachers
router.post('/test', function (req, res) {
    if (!req.files)
        return res.status(400).send('No files were uploaded.');


    let sampleFile = req.files.file;
    var modulename = req.body.module;
    var username = req.body.username;


    var location = 'storage/' + username + '/';
    var location2 = location + modulename + '/';
    mkdirp(path.join(process.cwd(), location2), function(err){
        if (err) {
            return console.error(err);
        }
    });


    sampleFile.mv(location2 + sampleFile.name, function (err) {
        if (err)
            return res.status(500).send(err);

        res.send('File uploaded!');
    });
});



//Teacher registers a new class to be stored online
router.post('/register', function (req, res) {
    var modulename = req.body.modulename;
    var modulecode = req.body.modulecode;
    var moduleprofessor = req.body.moduleprofessor;
    var modulekey = req.body.modulekey;
    // Validation
    req.checkBody('modulecode', 'Module name is required').notEmpty();
    req.checkBody('modulename', 'Module code is required').notEmpty();
    req.checkBody('moduleprofessor', 'Professor name is required').notEmpty();
    req.checkBody('modulekey', 'Please enter a module key').notEmpty();

    var errors = req.validationErrors();

    if (errors) {
        res.render('register', {
            errors: errors
        });
    } else {
        var newClass = new ClassStore({
            creator: moduleprofessor,
            className: modulename,
            classCode: modulecode,
            classKey: modulekey
        });

        ClassStore.createClassStore(newClass, function (err, user) {
            if (err) throw err;
            console.log(user);
        });

        req.flash('success_msg', 'Your new class has been created');

        res.redirect('/users/dashboard');
    }
});

//Returning Classes that the teacher has created
router.get('/store', function (req, res) {
    var creator = req.param('creator');
    //alert(creator);
    var query = ClassStore.findByCreator(creator);

    query.then((user) => {
        res.json(user);
    })
        .catch((err) => {
        res.send("error found");
    });
});

//Student joins a class
router.post('/enroll', function (req, res) {
    var modulecode = req.body.modulecode;
    var username = req.body.username;



    // Validation
    req.checkBody('modulecode', 'Module name is required').notEmpty();
    req.checkBody('username', 'Username is required').notEmpty();


    var errors = req.validationErrors();

    if (errors) {
        console.log("  ");
        console.log(errors);

    } else {
        var newRegister = new Enrolled({
            studentID: username,
            classID: modulecode
        });

        Enrolled.register(newRegister, function (err, user) {
            if (err) throw err;
            console.log(user);
            return user;
        });

        req.flash('success_msg', 'You have enrolled in this class successfully');

        res.redirect('/users/sDashboard');
    }

});




router.get('/enrolledin', function (req, res) {
    var student = req.param('creator');
    var isEnrolled = Enrolled.findDetails(); //Enrolled.studentIsTaking(student);
    isEnrolled.then((user) => {
        res.json(user);
    })
        .catch((err) => {
        res.send("error found");
    });


});



module.exports = router;
