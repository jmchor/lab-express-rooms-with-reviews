const { Schema, model } = require('mongoose');

// TODO: Please make sure you edit the User model to whatever makes sense in this case
const userSchema = new Schema(
	{
		fullName: {
			first: {
				type: String,
				trim: true,
				required: true,
			},
			last: {
				type: String,
				trim: true,
				required: true,
			},
		},
		email: {
			type: String,
			required: true,
			unique: true,
			lowercase: true,
			trim: true,
		},
		password: {
			type: String,
			required: true,
		},
		slackID: String,
		googleID: String,
	},
	{
		// this second object adds extra properties: `createdAt` and `updatedAt`
		timestamps: true,
	}
);

const User = model('User', userSchema);

module.exports = User;
