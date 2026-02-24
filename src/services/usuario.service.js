const Ususario = require('../models/usuario.model');

const crearUsuario = async (data) => {
    return await Ususario.create(data);     
};

const listarUsuarios = async () => {
    return await Ususario.findAll();
};

const listarUsuarioPorId = async (id) => {
    return await Ususario.findByPk(id);
};

const actualizarUsuario = async (id, data) => {
    const usuario = await Ususario.findByPk(id);
    if(!usuario) {
        return null;
    }
    await usuario.update(data);
    return usuario;
};

const eliminarUsuario = async (id) => {
    const usuario = await Ususario.findByPk(id);
    if(!usuario) {
        return null;
    }
    await usuario.destroy();
    return true;
};

module.exports = {
    crearUsuario,
    listarUsuarios,
    listarUsuarioPorId,
    actualizarUsuario,
    eliminarUsuario
};
       


