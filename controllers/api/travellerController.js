const express = require('express');
const router = express.Router();
const {Location, Traveller, Trip} = require('../../models');


router.get("/",(req,res)=>{
    Traveller.findAll({
        include:[Location]
    }).then(dbTraveller=>{
        if(dbTraveller.length){
            res.json(dbTraveller)
        } else {
            res.status(404).json({message:"No travellers found!"})
        }
    }).catch(err=>{
        console.log(err);
        res.status(500).json({message:"an error occured",err:err})
    })
})

router.post("/",(req,res)=>{
    Traveller.create({
        name:req.body.name,
        email:req.body.email
    }).then(newTraveller=>{
        res.json(newTraveller);
    }).catch(err=>{
        console.log(err);
        res.status(500).json({message:"an error occured",err:err})
    })
})

module.exports = router;