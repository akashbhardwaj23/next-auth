
/// Doing it in a server component get the user details and display it

import { Appbar } from "@/components/Appbar";
import { getServerSession } from "next-auth"
import { NEXT_AUTH } from "../lib/auth";


// Whenever using getServerSession, we need to pass the NEXT_AUTH object
export default async function(){
    const session = await getServerSession(NEXT_AUTH);
    return <div>
        <Appbar />
        User Component
        {
            JSON.stringify(session)
        }
    </div>
}