const express = require('express');
const router = express.Router();

router.post('/getdummy', async (req, res, next) => {

  const dummyResponse = {
    code: 200,
    message: "Dummy response Ok",
    data: [
      {id:1, nombre:"dummy1"},
      {id:2, nombre:"dummy2"},
      {id:3, nombre:"dummy3"},
      {id:4, nombre:"dummy4"},
    ]
  };

  try{
    res.setHeader('Content-Type', 'application/json');
    res.json(dummyResponse);
  }
  catch (e){
    res.status(400).send('Invalid JSON string')
  }

});

module.exports = router;