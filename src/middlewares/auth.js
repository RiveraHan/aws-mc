import { request, response } from 'express';
import Person from '../models/Users/Person';
import jwt from 'jsonwebtoken';

const isAuth = async (
  req = request,
  res = response,
  next
) => {
  const token = req.header('x-auth-token');

  if (!token)
    return res.status(401).json({ msg: 'No token, invalid permission.' });

  try {
    const { payload: { personId, patientId, medicalId } } = await jwt.verify(token, process.env.SEED);

    // read the user that corresponds to the personId
    const user = await Person.findById(personId);

    if (!user) {
      return res
        .status(401)
        .json({ msg: 'Invalid token - user does not exist' });
    }

    // Check if the personId is true
    if (!user.state) {
      return res
        .status(401)
        .json({ msg: 'Invalid token - user with status: false' });
    }

    const decoded = {
      patientId,
      medicalId,
      user,
    };

    req.user = decoded;
    next();
  } catch (error) {
    console.error(error);
    res.status(401).json({ msg: 'Invalid token' });
  }
};

export default isAuth;
