import CredentialsProvider  from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";

export const NEXT_AUTH = {
    providers : [
        CredentialsProvider({
            name : 'Email',
            credentials : {
                username : {label : "Username", type : "text", placeholder : "email"},
                password : {label : "Password", type : "password", placeholder : "Password"}
            },
            async authorize(credentials : any){
                const {username, password} = credentials;   
                
                console.log(credentials)

                return {
                    id : "user1",
                    name : "My user",
                    email : "email of user"
                }
            }
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID || "",
            clientSecret: process.env.GOOGLE_CLIENT_SECRET || ""
          }),
        GitHubProvider({
            clientId: process.env.GITHUB_CLIENT_ID || "",
            clientSecret: process.env.GITHUB_CLIENT_SECRET || ""
          })
    ],
    callbacks : {
        // jwt : async ({token, user }) => {
        //     token.userId = token.sub;
        //     console.log("Token is here ", token)
              
        //     return token;
        // },
        session : async ({session, token, user}: any) => {
            if(session &&  session.user){
                session.user.id = token.sub;
            }
            console.log("Session is here ", session)
            return session;
        }

    },
    secret : process.env.NEXTAUTH_SECRET,
    pages : {
        signIn : "/signin",
    }
}