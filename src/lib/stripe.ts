import Stripe from "stripe";
import * as dotenv from "dotenv";

dotenv.config();

export const stripe = new Stripe(process.env.STRIPE_PRIVATE_KEY!, {
  apiVersion: "2022-11-15",
  appInfo: {
    name: "Nextjs_Shop",
  },
});
