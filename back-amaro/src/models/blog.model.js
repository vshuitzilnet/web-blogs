const {Schema, model} = require('mongoose');

const BlogSchema = new Schema({
    title: {type: String, required: true},
    autorId: {type: String, required: true},
    text: {type: String, required: true},
}, {
    timestamps: true //With this I can know when the blog was created
});


// Export model
module.exports = model('Blog', BlogSchema);