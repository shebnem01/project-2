import { NextRequest, NextResponse } from "next/server";

export async function POST(req:NextRequest){
    const res=NextResponse.json({status:'success',message:"Logged out successfully"});
    res.cookies.set({
        name:'token',
        value:'',
        path:'/',
        maxAge:-1
    })
    return res;
}