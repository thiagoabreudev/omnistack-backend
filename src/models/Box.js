const mongoose = require('mongoose');

const Box = new mongoose.Schema({
    title: {
        type: String, 
        required: true,
    }, 
    files: [{
        type: mongoose.Schema.Types.ObjectId, ref: "File" // Faz referencia com ontro model (Armazena os ids dos files)
    }]
}, {
    timestamps: true // Cria automaticamente o created_at e updated_at
})


module.exports = mongoose.model("Box", Box)