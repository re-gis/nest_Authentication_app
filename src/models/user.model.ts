/* eslint-disable prettier/prettier */
import * as mongoose from 'mongoose';

export const UserModel = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
    },

    password: {
      type: String,
      required: true,
    },

    username: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);
