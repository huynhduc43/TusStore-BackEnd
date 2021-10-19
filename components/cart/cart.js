import { Schema, model } from 'mongoose';

const cartSchema = new Schema({
    productId: {type: Schema.Types.ObjectId, require: true},
    userId: {type: Schema.Types.ObjectId, require: true},
    avatar: String,
    name: String,
    content: { type: String, require: true },
    postDate: {type: Date, require: true},
    like: {type: Array, require: true, default: []}, // user id array
});

export default model('cart', cartSchema);