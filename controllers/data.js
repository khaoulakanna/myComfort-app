const Data = require('../models/data');

exports.postData = (req, res, next) => {
    const user = req.body.user;
    const zoneId = req.body.zoneId;
    const sousZoneId = req.body.sousZoneId;
    const climat = req.body.climat;
    const activity = req.body.activity;
    const clothing = req.body.clothing;
    const date = req.body.date;
  
    const newData = new Data({
      user,
      zoneId,
      sousZoneId,
      climat,
      activity,
      clothing,
      date,
    });
  
    newData
      .save()
      .then((result) => {
        console.log(result);
        console.log("Data Added Successfully!");
      })
      .catch((err) => console.log(err))};