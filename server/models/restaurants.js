const mongoose = require("mongoose");

const restaurant = mongoose.model('restaurants', new mongoose.Schema({
    name: {
        type: String,
        default: null
    },
    email: {
        type: String,
        default: null
    },
    address: {
        type: String,
        default: null
    },
    password: {
        type: String,
        default: null
    },
    mobile: {
        type: Number,
        default: null
    },
    restaurent_logo: {
        type: String,
        default: null
    },
    address: String,
    city: {
        type: String,
        default: null
    },
    state: {
        type: String,
        default: null
    },
    country: {
        type: String,
        default: null
    },
    restaurant_type: {
        restaurant_type: {
            type: String,
            enum: ['take_away', 'dining_table', 'hotel'],
            default: 'take_away'
        },
        dining_table: [{
            dining_table_id: {
                type: Number
            }
        }],
        rooms: [{
            room_id: {
                type: Number
            }
        }]
    },
    menu: [{
        id: {
            type: Number
        },
        name: {
            type: String
        },
        description: {
            type: String
        },
        category: {
            type: String
        },
        image: {
            type: String
        },
        item: [{
            size: String,
            price: Number
        }]
    }],
    created_date: {
        type: Date,
        default: new Date()
    }
}
));

exports.restaurant = restaurant;