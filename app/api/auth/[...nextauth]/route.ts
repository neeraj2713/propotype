import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
// Add others if needed

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-expect-error
    async session({ session, token }) {
      session.user.id = token.sub
      return session
    },
  },
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
