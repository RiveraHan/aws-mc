const mongoose = require('mongoose');

const MedicalSchema = new mongoose.Schema(
  {
    speciality: [String],
    timetable: {
      name: String,
      firtsDW: Date,
      lastDW: Date,
      startingH: Date,
      finishH: Date,
      break: Date,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    patientId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Patient',
    },
    minsaSupport: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'MinsaCodes',
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Medical', MedicalSchema);
