import { AUTHOR_BY_GITHUB_ID_QUERY } from "@/sanity/lib/queries";
import { client } from "@/sanity/lib/client";
import { writeClient } from "@/sanity/lib/write-client";
import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"


export const { handlers, auth, signIn, signOut } = NextAuth({
    providers: [GitHub],
    callbacks: {
        async signIn({ user: { name, email, image }, profile }) {

            const existingUser = await client.withConfig({ useCdn: false }).fetch(AUTHOR_BY_GITHUB_ID_QUERY, { id: profile?.id })

            console.log("User exists: ", existingUser)

            if (!existingUser) {
                await writeClient.create({
                    _type: "author",
                    id: profile?.id,
                    name,
                    username: profile?.login,
                    email,
                    image,
                    bio: profile?.bio || ""
                })
            }

            return true;
        },
        async jwt({ token, account, profile }) {

            if (account && profile) {
                const user = await client.withConfig({ useCdn: false }).fetch(AUTHOR_BY_GITHUB_ID_QUERY, { id: profile?.id })

                token.id = user?._id;

                console.log("Assigned token id to: ", token.id)
            }

            return token;
        },
        async session({ session, token }) {
            Object.assign(session, { id: token.id })
            return session;
        }
    }
})