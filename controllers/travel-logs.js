const express = require('express');
const router = express.Router();
const Logs = require('../models/travel-logs.js');

router.get('/', (req, res)=>{
  Logs.find({}, (err, foundLogs)=>{
    res.json(foundLogs);
  });
});

router.post('/', (req, res)=>{
    Logs.create(req.body, (err, createdLog)=>{
        res.json(createdLog);
    });
});

router.put('/:id', (req, res)=>{
    Logs.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedLog)=>{
        res.json(updatedLog);
    });
});

router.delete('/:id', (req, res)=>{
    Logs.findByIdAndRemove(req.params.id, (err, deletedLog)=>{
        res.json(deletedLog);
    });
});

module.exports = router;
