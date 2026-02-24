const usuarioService = require('../services/usuario.service');

const crear = async (req, res) => {
    try {
        const usuario = await usuarioService.crearUsuario(req.body);
        res.status(201).json(usuario);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const listar = async (req, res) => {

    const usuarios = await usuarioService.listarUsuarios();
    res.json(usuarios);

};

const listarPorId = async (req, res) => {
    try {
        const { id } = req.params;
        const usuario = await usuarioService.listarUsuarioPorId(id);
        if(!usuario) {
            return res.status(404).json({ error: 'Usuario no encontrado' });
        }
        res.json(usuario);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const actualizar = async (req, res) => {
    try {
        const { id } = req.params;
        const usuarioActualizado = await usuarioService.actualizarUsuario(id, req.body);
        if(!usuarioActualizado) {
            return res.status(404).json({ error: 'Usuario no encontrado' });
        }
        res.json(usuarioActualizado);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const eliminar = async (req, res) => {
    try {
        const { id } = req.params;
        const usuarioEliminado = await usuarioService.eliminarUsuario(id);
        if(!usuarioEliminado) {
            return res.status(404).json({ error: 'Usuario no encontrado' });
        }
        res.json({ message: 'Usuario eliminado correctamente' });
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