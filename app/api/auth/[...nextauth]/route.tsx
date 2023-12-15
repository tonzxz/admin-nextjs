import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

interface User {
  id: string;
}

const authOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {},
      async authorize(credentials: {
        username: string;
        password: string;
      }): Promise<User | null> {
        const user: User | null = { id: "1" }; // Replace this with your actual user authentication logic
        return user;
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/pages/login_route",
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
