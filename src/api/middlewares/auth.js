import { request, response } from 'express';
import Person from '../../models/Users/Person';
import jwt from 'jsonwebtoken';

export default VerificacionToken = async (
  req = request,
  res = response,
  next
) => {
  const token = req.header('x-auth-token');

  if (!token)
    return res.status(401).json({ msg: 'No hay token, permiso no válido.' });

  try {
    const { MedicalId, personId } = jwt.verify(token, process.env.SEED);

    // read the user that corresponds to the personId
    const user = await Person.findById(personId);

    if (!user) {
      return res
        .status(401)
        .json({ msg: 'Token no válido - usuario no existe DB' });
    }

    // Check if the personId is true
    if (!user.state) {
      return res
        .status(401)
        .json({ msg: 'Token no válido - usuario con estado: false' });
    }

    const decoded = {
      MedicalId,
      user,
    };

    req.user = decoded;
    next();
  } catch (error) {
    console.error(error);
    res.status(401).json({ msg: 'Token no válido' });
  }
};
