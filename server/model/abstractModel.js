const mongoose = require('mongoose')

const fileSchema = new mongoose.Schema({ 
  text: {
      type: String
  },
  input_url: {
      type: String
  },
  estado: {
      type: Boolean
  },
  clasificacion: {
      type: String  
  },
  diseños: {
      type: Array
  },
  fuentes: {
      type: Array
  },
  tematicas:{
      type: Array
  },
  corrientes: {
      type: Array
  }
})

module.exports = mongoose.model('files', fileSchema)