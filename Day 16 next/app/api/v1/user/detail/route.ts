import { NextResponse } from "next/server";
// get method use for fetching data and post method use for sending data
export function GET() {
 return NextResponse.json({
    title: "Hello Nidhi",
    message:"Hello World"
 })
}

export function POST() {
    return NextResponse.json({
         title: "Hello Nidhi",
    message:"Hello World"
    })
   }