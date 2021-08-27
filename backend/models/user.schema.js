import mongoose from 'mongoose';
var userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    phoneNumber: {
        type: Number,
        required: true,
        unique: true,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
}, {
    timestamps: true,
});
var User = mongoose.model('User', userSchema);
export default User;
//# sourceMappingURL=user.schema.js.map