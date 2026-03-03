const Departamento = require('../models/departamento.model');

const crearDepartamento = async (data) => {
    return await Departamento.create(data);     
};

const listarDepartamentos = async () => {
    return await Departamento.findAll();
};

const listarDepartamentoPorId = async (id) => {
    return await Departamento.findByPk(id);
};

const actualizarDepartamento = async (id, data) => {
    const departamento = await Departamento.findByPk(id);
    if(!departamento) {
        return null;
    }
    await departamento.update(data);
    return departamento;
};

const eliminarDepartamento = async (id) => {
    const departamento = await Departamento.findByPk(id);
    if(!departamento) {
        return null;
    }
    await departamento.destroy();
    return true;
};

module.exports = {
    crearDepartamento,
    listarDepartamentos,
    listarDepartamentoPorId,
    actualizarDepartamento,
    eliminarDepartamento
};