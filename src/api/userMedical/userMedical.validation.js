const Joi = require('joi');
const { password, objectId } = require('../../validations/custom.validation');

const createUser = {
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required().custom(password),
    name: Joi.string().required(),
    role: Joi.string().required().valid('Medical'),
    surname: Joi.string().required(),
    dni: Joi.string().required().min(12).max(14),
    phone: Joi.string().required().alphanum(),
    gender: Joi.string().required(),
    born: Joi.string().required(),
    address: Joi.string().required(),
    speciality: Joi.string().required(),
    minsa: Joi.string().required(),
    minsaSupport: Joi.string(),
    timetable: Joi.string(),
    userName: Joi.string().required(),
  }),
};

const getUsers = {
  query: Joi.object().keys({
    name: Joi.string(),
    role: Joi.string(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const getUser = {
  params: Joi.object().keys({
    userId: Joi.string().custom(objectId),
  }),
};

const updateUser = {
  params: Joi.object().keys({
    userId: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      email: Joi.string().email(),
      password: Joi.string().custom(password),
      name: Joi.string(),
    })
    .min(1),
};

const deleteUser = {
  params: Joi.object().keys({
    userId: Joi.string().custom(objectId),
  }),
};

module.exports = {
  createUser,
  getUsers,
  getUser,
  updateUser,
  deleteUser,
};
