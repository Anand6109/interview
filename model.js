const mongoose = require("mongoose");

const fetchSchema = new mongoose.Schema(
  {
    userId: {
      type: String
    },
    title: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("fetch", fetchSchema);
