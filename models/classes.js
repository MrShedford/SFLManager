var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/authentication');

var db = mongoose.connection;


// This is the schema for storing classes, but not people enrolled in those classes
var ClassStoreSchema = mongoose.Schema({
    creator : {
        type: String
    },
    className: {
        type : String
    },
    classCode : {
        type: String,
    },
    classKey : {
        type: String,
        index:true
    }
});

var ClassStore = module.exports = mongoose.model('ClassStore' , ClassStoreSchema);

module.exports.createClassStore = function(newClass, callback){
            newClass.save(callback);
}

module.exports.findByCreator = function(creator) {
    var query = ClassStore.find({creator:creator}).lean().exec();
    return query;
}

module.exports.findall = function() {
    var query = ClassStore.find({}).lean().exec();
    return query;
}

module.exports.findById = function(Moduleid) {
    var query = ClassStore.find({_id:Moduleid}).lean().exec();
    return query;
}
