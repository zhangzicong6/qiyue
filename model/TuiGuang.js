var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var connect_url = require('../conf/proj.json').mongodb;
var db = mongoose.createConnection(connect_url); 
var autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(db);

var TuiGuangSchema = new Schema({
    pageTitle: String,
    name: String,
    picurl: String,
    capter: String,
    statisticsUrl: String,
    channel: String,
    remarks: String,
    date: String,
    reading : String,
    weight : Number,
    status : Number
});

TuiGuangSchema.plugin(autoIncrement.plugin, {
    model: 'TuiGuang',
    field: 'id',
    startAt: 1,
    incrementBy: 1
});

var TuiGuangModel = db.model('TuiGuang', TuiGuangSchema);
module.exports = TuiGuangModel;
