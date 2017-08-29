const bcrypt = require('bcryptjs');

// // TODO: change mongoose schema
// const userSchema = new Schema({
//   username: { type: String, unique: true, lowercase: true, required: true },
//   passwordHash: { type: String, required: true }
// })
// });
//
//
// userSchema.virtual('password')
//   .get(function () { return null })
//   .set(function (value) {
//     const hash = bcrypt.hashSync(value, 8);
//     this.passwordHash = hash;
//   })
//
// userSchema.methods.authenticate = function (password) {
//   return bcrypt.compareSync(password, this.passwordHash);
// }
//
// userSchema.statics.authenticate = function(username, password, done) {
//     this.findOne({
//         username: username
//     }, function(err, user) {
//         if (err) {
//             done(err, false)
//         } else if (user && user.authenticate(password)) {
//             done(null, user)
//         } else {
//             done(null, false)
//         }
//     })
// };
//
//
//
// userSchema.statics.signup = function(config, done) {
//     this.findOne({
//         username: config.username
//     }, function(err, user) {
//         if (err) {
//             done(err, false);
//
//         } else if (user) {
//           done(null, false);
//
//         } else {
//           var newUser = new User(config);
//
//           newUser.save(function(err, user) {
//             if (err) {
//               done(err, false);
//             } else {
//               done(null, user);
//             }
//           });
//         }
//     })
// };
//
// // TODO: change mongoose scheme
// const User = mongoose.model('User', userSchema);
//
// module.exports = User;
