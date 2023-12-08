import mongoose, { Schema } from "mongoose";

const viewsSchema = new mongoose.Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: "Users" },
    post: { type: Schema.Types.ObjectId, ref: "Posts" },
  },
  { timestamps: true }
);

const Views = mongoose.model("Views", viewsSchema);

export default Views;
