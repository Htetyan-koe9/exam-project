import { nanoid } from "nanoid";

export default async ({ app }, inject) => {
  const nanoidClient = {
    getId: (length = 10, prefix = "") => [prefix, nanoid(length)].join("-"),
  };

  inject("nanoid", nanoidClient);
};
