const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

const hireSchema = new mongoose.Schema({
    id: mongoose.Types.ObjectId,
    product_id:{
        type: String,
    },
    phone: {
        type: String,
        required: ['Phone No is required'],
        trim: true,
        minlength: [3, 'Phone  should be at least 3 characters long'],
        maxLenght: [12, "Phone can't be more than 50 cahracters long"]
    },
    location: {
        type: String,
        required: ['Location is required'],
        minlength: [3, 'Location  should be at least 3 characters long'],

        }
    },
   
  
   
   
);

hireSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('hireCreate', hireSchema);