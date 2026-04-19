const User = require("../models/user");

async function handleGetAllUsers(req, res) {
  const allDbUsers = await User.find({});
  return res.json(allDbUsers);
}

async function handleGetUserById(req, res) {
  const user = await User.findById(req.params.id);
  if (!user) return res.status(404).json({ error: "User not found" });
  return res.json(user);
}

async function handleUdateGetUserById(req, res) {
  await User.findByIdAndUpdate(req.params.id, { lastName: "verma" });
  return res.json({ status: "successfully update " });
}

async function handleDeleteUserById(req, res) {
  await User.findByIdAndDelete(req.params.id);
  return res.json({ status: "successfully deleted" });
}

async function handleCreateNewUser(req, res) {
  const body = req.body;
  if (
    !body ||
    !body.firstName ||
    !body.lastName ||
    !body.email ||
    !body.gender ||
    !body.job_title
  ) {
    return res.status(400).json({ msg: "all filed are required" });
  }

  const result = await User.create({
    firstName: body.firstName,
    lastName: body.lastName,
    email: body.email,
    gender: body.gender,
    job_title: body.job_title,
  });
  console.log(result);
  return res.status(201).json({ msg: "success" ,id: result._id});
}

module.exports = {
  handleGetAllUsers,
  handleGetUserById,
  handleUdateGetUserById,
  handleDeleteUserById,
  handleCreateNewUser,
};
