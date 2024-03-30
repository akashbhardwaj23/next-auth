"use client"
// import { useRouter } from "next/navigation"   // or
import {signIn , signOut, useSession} from "next-auth/react"
// useSession is a hook that returns the session object and it is for client components

export const Appbar = () => {
    const session = useSession();
    // const router = useRouter();
    return (
        <div>
            <button onClick={() => {
                // router.push("/api/auth/signin")
                signIn()

            }}>Signin</button>

<button onClick={() => {
                // router.push("/api/auth/signin")
                signOut()

            }}>LogOut</button>



            {
                JSON.stringify(session)
            }
        </div>
    )
}