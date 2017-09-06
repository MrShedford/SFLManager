var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/authentication');

var db = mongoose.connection;

var ClassAssignmentsSchema = mongoose.Schema({
    creator: {
        type: String
    },
    module: {
        type: String
    },
    date: {
        type: Date
    },
    title: {
        type: String
    },
    description: {
        type: String
    },
    filename: {
        type: String
    },
    text: {
        type: String
    },
    submissions: {
        type: String
    }
});

var ClassAssignments = module.exports = mongoose.model('ClassAssignments', ClassAssignmentsSchema);

module.exports.saveAssignmentInfo = function (newAssignment) {
    var assignment = newAssignment.save();
    return assignment;
}

module.exports.findByCreator = function(creator) {
    var query = ClassAssignments.find({creator:creator}).lean().exec();
    return query;
}

module.exports.findAndUpdateAssignment = function(username, title, description, text) {
    var query = {creator:username,title:title,description:description};
    var updating = ClassAssignments.findOneAndUpdate(query, {$set:{text:text}},{new:true}, function(err, doc) {
        if(err){
            console.log("Something went wrong updating the data");
        }
        console.log(doc);//This means everything works perfectly
    })
}

module.exports.findAndSubmitAttempt = function(annotationDate, annotationModule, annotationTitle, date, submission) {
    var query = {date:annotationDate,title:annotationTitle,module:annotationModule};     //this is the find query for the update. It'll search for the module and then append the student submission to it
    var updating = ClassAssignments.findOneAndUpdate(query, {$set:{text:text}},{new:true}, function(err, doc) {
        if(err){
            console.log("Something went wrong updating the data");
        }
        console.log(doc);//This means everything works perfectly
    })
    return query;
}
