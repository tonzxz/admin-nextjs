    import User from "@/models/user";
    import { connectMongoDB } from "@/lib/mongodb";
    import { NextResponse } from "next/server";

    export async function POST(req: Request) {
        try {

            const {email} = await req.json();
            const user = await User.findOne({email}).select("_id");

            await connectMongoDB();
            
            console.log("user: ", user);
            return NextResponse.json({ user });
        } catch (error) {
            console.log(error);
        }
    }