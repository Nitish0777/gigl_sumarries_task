// Path: server/app/models/user.model.js

export const User = function (user) {
  this.name = user.name;
  this.email = user.email;
  this.password = user.password;
};
