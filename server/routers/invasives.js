const {Router} = require("express");
const Invasive = require("../models/Invasive");
const router = Router();

router.post("/", (request, response) => {
  const newInvasive = new Invasive(request.body);
  newInvasive.save((error, record) => {
    if (error) return response.status(500).json(error);
    return response.json(record);
  });
});

module.exports = router;
