import { connectionStr } from "@/app/lib/db";
import { restaurantSchema } from "@/app/lib/restaurantModel";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET() {
  await mongoose.connect(connectionStr, { useNewUrlParser: true }); //useNewUrlParser not necessary
  const data = await restaurantSchema.find();
  console.log(data);

  return NextResponse.json({
    result: data,
  });
}

export async function POST(request) {
  let payload = await request.json();
  let result;
  let success = false;
  await mongoose.connect(connectionStr, { useNewUrlParser: true });
  console.log("payload ==>", payload);
  if (payload.login) {
    // login
    result = await restaurantSchema.findOne({
      email: payload.email,
      password: payload.password,
    });
    console.log("res", result);
    if (result) {
      success = true;
    }
  } else {
    // signup
    let restaurant = new restaurantSchema(payload);
    result = await restaurant.save();
    if (result) {
      success = true;
    }
  }
  return NextResponse.json({ result, success });
}
