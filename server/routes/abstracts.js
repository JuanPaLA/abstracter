const express = require('express')
const router = express.Router()
const fileMod = require('../model/abstractModel.js') 

router.get('/test', (req, res) => {
    res.send({ msg: 'Cities test route.' })
})

//@GET QUOTES
router.get('/abs/one', (req, res) => {
    fileMod.findOne({
       clasificacion: ''   
    })
    .then(files => {
        res.send(files)
    })
    .catch(err => console.log(err));
});


module.exports = router