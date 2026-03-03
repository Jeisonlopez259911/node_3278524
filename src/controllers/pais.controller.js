const paisService = require('../services/pais.services');

const crear = async (req, res) => {
    try {
        const pais = await paisService.crearPais(req.body);
        res.status(201).json(pais);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const listar = async (req, res) => {

    const paises = await paisService.listarPaises();
    res.json(paises);

};

const listarPorId = async (req, res) => {
    try {
        const { id } = req.params;
        const pais = await paisService.listarPaisPorId(id);
        if(!pais) {
            return res.status(404).json({ error: 'Pais no encontrado' });
        }
        res.json(pais);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const actualizar = async (req, res) => {
    try {
        const { id } = req.params;
        const paisActualizado = await paisService.actualizarPais(id, req.body);
        if(!paisActualizado) {
            return res.status(404).json({ error: 'Pais no encontrado' });
        }
        res.json(paisActualizado);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const eliminar = async (req, res) => {
    try {
        const { id } = req.params;
        const paisEliminado = await paisService.eliminarPais(id);
        if(!paisEliminado) {
            return res.status(404).json({ error: 'Pais no encontrado' });
        }
        res.json({ message: 'Pais eliminado correctamente' });
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