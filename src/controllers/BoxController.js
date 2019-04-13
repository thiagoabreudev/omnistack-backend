// importa o modelo
// cria a classe 
// cria a funcao
// exporta o modulo

const Box = require('../models/Box'); 

class BoxController {
    async listAll(req, res) {
        const boxes = await Box.find({}); 
        return res.json(boxes)
    }
    
    async show(req, res) {
        let box = await Box.findById(req.params.id).populate({
            path: 'files', 
            options: {
                sort: {
                    createdAt: -1
                }
            }
        });
        return res.json(box);
    }
    async store(req, res) {
        const box = await Box.create(req.body);
        return res.json(box);
    }
}

module.exports = new BoxController() // Usa o new pois e necessario retornar a instancia