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

router.get("/", (request, response) => {
  Invasive.find({}, (error, record) => {
    if (error) return response.status(500).json(error);
    return response.json(record);
  });
});

router.get("/:id", (request, response) => {
  Invasive.findById(request.params.id, (error, record) => {
    if (error) return response.status(500).json(error);
    return response.json(record);
  });
});

router.delete("/:id", (request, response) => {
  Invasive.findByIdAndRemove(request.params.id, {}, (error, record) => {
    if (error) return response.status(500).json(error);
    return response.json(record);
  });
});

router.put("/:id", (request, response) => {
  const body = request.body;
  Invasive.findByIdAndUpdate(
    request.params.id,
    {
      $set: {
        servicename: body.servicename,
        client: body.client,
        address: body.address,
        city: body.city,
        zipcode: body.zipcode,
        applicationdate: body.applicationdate,
        timestarted: body.timestarted,
        timestopped: body.timestopped,
        applicatorname: body.applicatorname,
        applicatorlicense: body.applicatorlicense,
        herbicideamount: body.herbicideamount,
        herbicideapplied: body.herbicideapplied,
        herbiciderate: body.herbiciderate,
        herbicideepa: body.herbicideepa,
        surfactant: body.surfactant,
        surfactantrate: body.surfactantrate,
        surfactantepa: body.surfactantepa,
        additionalmaterials: body.additionalmaterials,
        targetspecies: body.targetspecies
      }
    },
    {
      new: true,
      upsert: true
    },
    (error, record) => {
      if (error) return response.status(500).json(error);
      return response.json(record);
      }
    );
});

module.exports = router;
