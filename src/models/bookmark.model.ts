/* eslint-disable prettier/prettier */

import * as mongoose from 'mongoose';

export const BookmarkModel = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    link: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);
