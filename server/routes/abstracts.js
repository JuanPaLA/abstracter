const express = require('express')
const router = express.Router()
const fileMod = require('../model/abstractModel.js') 

router.get('/test', (req, res) => {
    res.send({ msg: 'Cities test route.' })
})

//@GET ONE ABSTRACT
router.get('/abs/one', (req, res) => {
    fileMod.findOne({
       clasificacion: ''   
    })
    .then(files => {
        res.send(files)
    })
    .catch(err => console.log(err));
});

//@GET ABSTRACT BY ID
router.get('/abs/get/:id', (req, res) => {
    fileMod.findById({_id: req.params.id})
    .then(file => res.json(file))
});

router.put('/abs/post/:id', (req, res) => {
    console.log(req.body)
    fileMod.findByIdAndUpdate(
        {_id : req.params.id },
        { 
            clasificacion: req.body.clasificacion, 
            fuentes: req.body.fuentes,
            diseños: req.body.diseños,
            tematicas: req.body.tematicas,
            corrientes: req.body.corrientes
        }, 
        { new: true },
        function(err, result){
            if(err){
                res.send(err);
            }else{
                res.send(result)
            }
        }
    )
})


module.exports = router