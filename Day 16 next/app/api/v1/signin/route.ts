import { NextResponse, NextRequest } from "next/server";

import { PrismaClient } from "@prisma/client";

// import mongoose from "mongoose";
// nextresponse is used to send response to the client.
// nextrequest is used to get request from the client.
// post method is used to send data to the server.
// get method is used to get data from the server.
// async await is used to handle asyncronous code. and it is used to wait for the response from the server.
const prismaClient = new PrismaClient();
export async function POST(req: NextRequest) {

    const data = await req.json();
    // console.log(data);
    // connect to mongodb
    // mongoose.User.insert({
    // })
    await prismaClient.user.create ({
        data: {
            username: data.username,
            password: data.password
        }
    })
return NextResponse.json({
        message: "Signin Successfully",
        // status: 200,
    })
}

// get method use for fetching data and post method use for sending data
// export function GET() {
//  return NextResponse.json({
//     title: "Hello Nidhi",
//     message:"Hello World"
//  })
// }

export async function GET(req: NextRequest) {
    const data = await prismaClient.user.findMany();

    return NextResponse.json({
        username: data[0].username,
        password: data[0].password,
        message: "Data fetched successfully",

    })
}