const Persona = require("../../db/models/Persona");
const Contacto = require("../../db/models/Usuarios/Contacto");
const Municipios = require("../../db/models/Municipios");
const Datos_Materno = require("../../db/models/Usuarios/ROP/Datos_Maternos");
const Datos_bebe = require("../../db/models/Usuarios/ROP/Datos_bebe");
const Tipo_Paciente = require("../../db/models/Usuarios/Tipo_Paciente");
const Comorbilidades_Rop = require("../../db/models/Fichas/Ficha-Rop/Comorbilidades_Rop");
const Tratamientos_Recibidos = require("../../db/models/Fichas/Ficha-Rop/Tratamientos_Recibidos");
const Otros_Factores = require("../../db/models/Fichas/Ficha-Rop/Otros_Factores");
const Oxigenoterapia = require("../../db/models/Fichas/Ficha-Rop/Oxigenoterapia");

const enviarMensaje = require("../../twilio/enviar-mensaje");

const controlador = {

  crearFicha: async(req, res) => {
    const body = req.body;

    if (!body.nombre || !body.telefono) {
      res.status(400).send({
        ok: false,
        message: "Asegurese de enviar todos los datos"
      });
      return;
    }

    const nuevaPersona = await Persona.create({
      nombre: body.nombre,
    });

    const bodyMunicipio = body.municipio;
    await Municipios.findOne({ nombre: bodyMunicipio }).exec((err, municipio) => {

      if (err) throw err;

      if (municipio) {

        const municipio_id = municipio._id;

        Contacto.create({
          telefono: body.telefono,
          municipio_id: municipio_id,
          persona_id: nuevaPersona._id,
        });
      }
    });

    if (!body.factores_riesgos || !body.antecedentes_rop || !body.secuelas_antecedentes || !body.corticoides_antenatales) {
      res.status(400).send({
        ok: false,
        message: "Asegurese de enviar todos los datos maternos"
      });
      return;
    }

    const nuevoDatos_Maternos = await Datos_Materno.create({
      fecha_registro: body.fecha_registro,
      factores_riesgo_nombre: body.factores_riesgo_nombre,
      antecedentes_rop: body.antecedentes_rop,
      secuelas_antecedentes: body.secuelas_antecedentes,
      corticoides_antenatales: body.corticoides_antenatales,
      persona_id: nuevaPersona._id
    });

    if (!body.numero_expediente || !body.nombre || !body.peso_nacimiento || !body.edad_gestacional || !body.sexo) {
      res.status(400).send({
        ok: false,
        message: "Asegurese de enviar todos los datos del bebe"
      });
      return;
    }

    const nuevoDatos_bebe = await Datos_bebe.create({
      numero_expediente: body.numero_expediente,
      nombre_bebe: body.nombre_bebe,
      fecha_nacimiento: body.fecha_nacimiento,
      peso_nacimiento: body.peso_nacimiento,
      edad_gestacional: body.edad_gestacional,
      sexo: body.sexo,
      primer_examen_oftalmologico: body.primer_examen_oftalmologico,
      datos_maternos_id: nuevoDatos_Maternos._id
    });

    if (!body.profilaxis) {
      res.status(400).send({
        ok: false,
        message: "Asegurese de enviar todos los datos"
      });
      return;
    }

    const nuevoTratamientos_Recibido = await Tratamientos_Recibidos.create({
      profilaxis: body.profilaxis,
      datos_bebe_id: nuevoDatos_bebe._id
    });

    if (!body.referido || !body.fallecido) {
      res.status(400).send({
        ok: false,
        message: "Asegurese de enviar todos los datos tipo de paciente"
      });
      return;
    }

    await Tipo_Paciente.create({
      referido: body.referido,
      fallecio: body.fallecido
    });

    if (!body.sdr || !body.sepsis) {
      res.status(400).send({
        ok: false,
        message: "Asegurese de enviar todos los datos comorbilidades"
      });
      return;
    }

    await Comorbilidades_Rop.create({
      sdr: body.sdr,
      sepsis: body.sepsis
    });

    if (!body.surfactantes || !body.fototerapia || !body.transfusiones) {
      res.status(400).send({
        ok: false,
        message: "Asegurese de enviar todos los datos de /\"otros factores/\""
      });
      return;
    }

    await Otros_Factores.create({
      surfactantes: body.surfactantes,
      fototerapia: body.fototerapia,
      transfusiones: body.transfusiones,
      tratamientos_recibidos_id: nuevoTratamientos_Recibido._id
    });

    if (!body.ventilacion || !body.cpap || !body.bigotera || !body.camaracefalica || !body.total || !body.saturacion) {
      res.status(400).send({
        ok: false,
        message: "Asegurese de enviar todos los datos oxigenoterapia"
      });
      return;
    }

    await Oxigenoterapia.create({
      ventilacion: body.ventilacion,
      cpap: body.cpap,
      bigotera: body.bigotera,
      camaracefalica: body.camaracefalica,
      total: body.total,
      saturacion: body.saturacion,
      datos_bebe_id: nuevoDatos_bebe._id

    });
    const bo = `Tiene una Nueva Notificación del Sistema ROP HERAJ Bebe ${body.nombre}, con criterio de control de Recién nacidos prematuros menor o igual de 32 semanas de edad gestacional o menos de 1500 g de peso al nacer`;
    const to = "+50585038365";

    enviarMensaje(to, bo);
    res.status(201).send({
      ok: true,
      message: "Ficha creada con éxito, haragan"
    });
  }
};

module.exports = controlador;