const express = require("express");
const router = express.Router();
const SpaceXService = require("../services/SpaceXService");

/* Fetches all Capsules, sorted by capsule original launch date */
router.get("/", async function (req, res, next) {
  const jsonToReturn = await SpaceXService.getConsolesFromAPISortedByLaunchDate();
  const result = JSON.parse(JSON.stringify(jsonToReturn));
  if (result.status && result.status === "error") {
    res.status(404).json(result);
  }
  res.json(result);
});

/* Fetch the data of a Landing Pad by its id */
router.get("/landing_pad", async function (req, res, next) {
  const landingPadId = req.query.id;
  let jsonToReturn = {};

  // Return 422 'Unprocessible entity' if the id is not valid
  if (!landingPadId) {
    jsonToReturn = {
      status: "error",
      message: "Please add a valid landing pad id",
    };
    res.status(422).json(jsonToReturn);
  }

  jsonToReturn = await SpaceXService.getLandingPadDataById(landingPadId);
  const result = jsonToReturn;

  if (result.status && result.status === "error") {
    res.status(404).json(result);
  }
  res.json(JSON.parse(result[0].spaceItem));
});

module.exports = router;
