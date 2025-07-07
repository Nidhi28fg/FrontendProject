import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
// get method use for fetching data and post method use for sending data
// export function GET() {
//  return NextResponse.json({
//     title: "Hello Nidhi",
//     message:"Hello World"
//  })
// }

export async function POST() {
 
    return NextResponse.json({
    //      username: body.username,
    // password: body.password,
    // message: "Signin Successfully"
    })
   }