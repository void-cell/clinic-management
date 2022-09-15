const bcrypt = require("bcrypt");
const User = require("../models/User");

const createPasswordHash = async (plainPassword) => {
  const salt = await bcrypt.genSalt(10);
  return bcrypt.hash(plainPassword, salt);
};

const createUser = async (name, email, password) => {
  const hash = await createPasswordHash(password);

  return User.create({ name, email, password: hash });
};

const updateUser = async (id, name, email, password) => {
  const user = await User.findById(id);
  user.name = name;
  user.email = email;

  if (password) {
    const hash = await createPasswordHash(password);
    user.password = hash;
  }

  await user.save();
  return user;
};

const userByEmail = async (email) => User.findOne({ email });
const userById = async (id) => User.findById(id);

//DEV-ONLY
const all = async () => User.find().lean();

module.exports = { createUser, userById, userByEmail, updateUser, all };
