// import NextAuth from "next-auth";
// import GithubProvider from "next-auth/providers/github";
// import { PrismaAdapter } from "@auth/prisma-adapter";
// import { PrismaClient } from "./app/generated/prisma";

// const prisma = new PrismaClient();
// console.log("ARE YOU MADE", process.env.AUTH_GITHUB_SECRET)
// export const { auth, handlers, signIn, signOut } = NextAuth({
//   session: {
//     strategy: "jwt",
//   },
//   providers: [
//     GithubProvider({
//       clientId: process.env.AUTH_GITHUB_ID!,
//       clientSecret: process.env.AUTH_GITHUB_SECRET!,
//     })],
//   adapter: PrismaAdapter(prisma),
//   callbacks: {
//     async jwt({ token, user }) {
//       if (user) {
//         token.id = user.id
//         token.name = user.name
//       }
//       return token;
//     },
//     async session({ session, token }) {
//       if (session.user) {
//         session.user.id = token.id as string;
//         session.user.name = token.name as string;
//       }
//       return session;
//     }
//   }
// })