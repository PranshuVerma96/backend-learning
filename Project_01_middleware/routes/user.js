const express = require("express");

const router = express.Router();
const {
  handleGetAllUsers,
  handleGetUserById,
  handleUdateGetUserById,
  handleDeleteUserById,
  handleCreateNewUser,
} = require("../controllers/user");

// Routes
router.route("/")
.get(handleGetAllUsers)
.post(handleCreateNewUser);

router
  .route("/:id")
  .get(handleGetUserById)
  .delete(handleDeleteUserById)
  .patch(handleUdateGetUserById);

module.exports = router;
