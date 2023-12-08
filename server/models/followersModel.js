import mongoose, { Schema } from "mongoose";

const followersSchema = new mongoose.Schema(
  {
    followerId: { type: Schema.Types.ObjectId, ref: "Users" },
    writerId: { type: Schema.Types.ObjectId, ref: "Users" },
  },
  { timestamps: true }
);

const Followers = mongoose.model("Followers", followersSchema);

export default Followers;
