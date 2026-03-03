const departamentoService = require('../services/departamento.service');

const crear = async (req, res) => {
    try {
        const departamento = await departamentoService.crearDepartamento(req.body);
        res.status(201).json(departamento);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const listar = async (req, res) => {

    const departamentos = await departamentoService.listarDepartamentos();
    res.json(departamentos);

};

const listarPorId = async (req, res) => {
    try {
        const { id } = req.params;
        const departamento = await departamentoService.listarDepartamentoPorId(id);
        if(!departamento) {
            return res.status(404).json({ error: 'Departamento no encontrado' });
        }
        res.json(departamento);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const actualizar = async (req, res) => {
    try {
        const { id } = req.params;
        const departamentoActualizado = await departamentoService.actualizarDepartamento(id, req.body);
        if(!departamentoActualizado) {
            return res.status(404).json({ error: 'Departamento no encontrado' });
        }
        res.json(departamentoActualizado);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const eliminar = async (req, res) => {
    try {
        const { id } = req.params;
        const departamentoEliminado = await departamentoService.eliminarDepartamento(id);
        if(!departamentoEliminado) {
            return res.status(404).json({ error: 'Departamento no encontrado' });
        }
        res.json({ message: 'Departamento eliminado correctamente' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    crear,
    listar,
    listarPorId,
    actualizar,
    eliminar
};