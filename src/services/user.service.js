const httpStatus = require('http-status');
const { User } = require('../models');
const Medical = require('../models/Users/Medical/Medical');
const Patient = require('../models/Users/Patient/Patient');
const ApiError = require('../utils/ApiError');

/**
 * Create a user medical
 * @param {Object} userBody
 * @returns {Promise<User>}
 */
const createUserMedical = async (userBody) => {
  const {
    name,
    surname,
    dni,
    phone,
    gender,
    email,
    born,
    address,
    role,
    speciality,
    minsaSupport,
    timetable,
    userName,
    password,
  } = userBody;

  if (await User.isEmailTaken(userBody.email)) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'The user already exists, try a different one.');
  }

  const User_ = new User({
    name,
    surname,
    dni,
    phone,
    gender,
    email,
    role,
    born,
    address,
    userName,
    password,
  });

  const user = await User.create(User_);

  if (user) {
    const userId = user._id;

    const medical = new Medical({
      speciality,
      minsaSupport,
      timetable,
      userId,
    });

    await medical.save();
  }

  // const user = {
  //   id: resultUser.id
  // };

  // const token = await tokenService.generateAuthTokens(user);
  // return res.status(httpStatus.CREATED).send({
  //   ok: true,
  //   status: 201,
  //   User: resultUser,
  //   token,
  //   message: 'Successful registration.',
  // });

  return user;
};

/**
 * Create a user patient
 * @param {Object} userBody
 * @returns {Promise<User>}
 */
const createUserPatient = async (userBody) => {
  const {
    name,
    surname,
    dni,
    phone,
    gender,
    email,
    role,
    born,
    address,
    weight,
    blood,
    // clinicalStory,
    userName,
    password,
    medicalId,
  } = userBody;

  if (await User.isEmailTaken(userBody.email)) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'The user already exists, try a different one.');
  }

  const User_ = new User({
    name,
    surname,
    dni,
    phone,
    gender,
    email,
    born,
    role,
    address,
    userName,
    password,
  });

  const user = await User.create(User_);
  if (user) {
    const userId = user._id;
    const patient = new Patient({
      weight,
      blood,
      userId,
      medicalId,
    });

    await patient.save();
  }

  // const user = {
  //   id: user.id
  // };

  // const token = await tokenService.generateAuthTokens(user);
  // return res.status(httpStatus.CREATED).send({
  //   ok: true,
  //           status: 201,
  //   User: resultUser,
  //   token,
  //   message: 'Successful registration.',
  // });
  return user;
};

/**
 * Query for users
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const queryUsers = async (filter, options) => {
  const users = await User.paginate(filter, options);
  return users;
};

/**
 * Get user by id
 * @param {ObjectId} id
 * @returns {Promise<User>}
 */
const getUserById = async (id) => {
  return User.findById(id);
};

/**
 * Get user by email
 * @param {string} email
 * @returns {Promise<User>}
 */
const getUserByEmail = async (email) => {
  return User.findOne({ email });
};

/**
 * Update user by id
 * @param {ObjectId} userId
 * @param {Object} updateBody
 * @returns {Promise<User>}
 */
const updateUserById = async (userId, updateBody) => {
  const user = await getUserById(userId);
  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
  }
  if (updateBody.email && (await User.isEmailTaken(updateBody.email, userId))) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Email already taken');
  }
  Object.assign(user, updateBody);
  await user.save();
  return user;
};

/**
 * Delete user by id
 * @param {ObjectId} userId
 * @returns {Promise<User>}
 */
const deleteUserById = async (userId) => {
  const user = await getUserById(userId);
  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
  }
  await user.remove();
  return user;
};

module.exports = {
  createUserMedical,
  createUserPatient,
  queryUsers,
  getUserById,
  getUserByEmail,
  updateUserById,
  deleteUserById,
};
