const Ususario = require('../models/usuario.model');

const crearUsuario = async (data) => {
    return await Ususario.create(data);     
};

const listarUsuarios = async () => {
    return await Ususario.findAll();
};

module.exports = {
    crearUsuario,
    listarUsuarios,
};
       


