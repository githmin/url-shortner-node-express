const express = require("express");
const router = express.Router();
const urlModel = require("../models/URL");
const urlSchema = require("../models/URL");

router.get("/:id", async (req, res, next) => {
  const fullInfo = await urlSchema.find().where("short").equals(req.params.id);
  await urlSchema.findOneAndUpdate(
    { _id: fullInfo[0]._id },
    { $inc: { clicks: 1 } }
  );
  res.redirect(`https://${fullInfo[0].full}`);
});

router.get("/", async (req, res, next) => {
  const urlList = await urlModel.find().sort({ createdAt: -1 });
  res.render("index", { urlList: urlList });
});

module.exports = router;
