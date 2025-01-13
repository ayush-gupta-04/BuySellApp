import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google'

export const NEXT_AUTH = {
    providers : [
        CredentialsProvider({
            name: 'Email',
            credentials: {
              username: { label: 'Email', type: 'text', placeholder: '' },
              password: { label: 'Password', type: 'password', placeholder: '' },
            },
            async authorize(credentials : any) {
                return null
            },
        }),
        GoogleProvider({
            clientId : process.env.GOOGLE_CLIENT_ID || "",
            clientSecret : process.env.GOOGLE_CLIENT_SECRET || ""
        })
    ],
    pages : {
        signIn : '/auth/signin',
        signOut : '/auth/signin'
    },
    secret : process.env.NEXTAUTH_SECRET,
    callbacks : {
        session : ({session,token} : any) => {
            session.user.id = token.sub;
            return session;
        },
        signIn : async ({user,account} : any) => {
            return true;
        }
    }
}
