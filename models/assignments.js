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
