const File = require("../models/File"); 
const Box = require("../models/Box");

class FileController {
    async store(req, res) {
        let box = await Box.findById(req.params.id);
        let file = await File.create({
            title: req.file.originalname, 
            path: req.file.key
        })
        box.files.push(file)
        box.save()
        req.io.sockets.in(box._id).emit('file', file); // Notifica todos usuario conectados a sala do box
        return res.send(file);
    }
}


module.exports = new FileController();