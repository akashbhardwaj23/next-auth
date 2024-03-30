import { NEXT_AUTH } from "@/app/lib/auth";
import NextAuth from "next-auth";


// login with password or email or google or facebook
const handler = NextAuth(NEXT_AUTH);


// send the id using callbacks - bunch of functions inside which we can write our own logic 


export const GET = handler;
export const POST = handler;