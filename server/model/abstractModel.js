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
  diseños: {
      type: Array
  },
  fuentes: {
      type: Array
  },
  tematica:{
      type: Array
  },
  corriente: {
      type: Array
  }
})

module.exports = mongoose.model('files', fileSchema)