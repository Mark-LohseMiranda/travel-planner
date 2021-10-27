const express = require('express');
const router = express.Router();
const {Location, Traveller, Trip} = require('../../models');


router.get("/",(req,res)=>{
    Trip.findAll().then(dbTrip=>{
        if(dbTrip.length){
            res.json(dbTrip)
        } else {
            res.status(404).json({message:"No trips found!"})
        }
    }).catch(err=>{
        console.log(err);
        res.status(500).json({message:"an error occured",err:err})
    })
})

router.post("/",(req,res)=>{
    Trip.create({
        trip_budget:req.body.trip_budget,
        traveller_amount:req.body.traveller_amount,
        traveller_id:req.body.traveller_id,
        location_id:req.body.location_id
    }).then(newTrip=>{
        res.json(newTrip);
    }).catch(err=>{
        console.log(err);
        res.status(500).json({message:"an error occured",err:err})
    })
})

module.exports = router;