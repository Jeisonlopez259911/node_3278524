const Pais = require('../models/pais.model');

const crearPais = async (data) => {
    return await Pais.create(data);     
};

const listarPaises = async () => {
    return await Pais.findAll();
};

const listarPaisPorId = async (id) => {
    return await Pais.findByPk(id);
};

const actualizarPais = async (id, data) => {
    const pais = await Pais.findByPk(id);
    if(!pais) {
        return null;
    }
    await pais.update(data);
    return pais;
};

const eliminarPais = async (id) => {
    const pais = await Pais.findByPk(id);
    if(!pais) {
        return null;
    }
    await pais.destroy();
    return true;
};

module.exports = {
    crearPais,
    listarPaises,
    listarPaisPorId,
    actualizarPais,
    eliminarPais
};