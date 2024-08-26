import NextAuth from "next-auth";
import IdentityServer4Provider from "next-auth/providers/identity-server4";

export default NextAuth({
  providers: [
    IdentityServer4Provider({
      clientId: process.env.WSO2_CLIENT_ID,
      clientSecret: process.env.WSO2_CLIENT_SECRET,
      issuer: process.env.WSO2_ISSUER,  // Now includes :443
      authorization: {
        url: `${process.env.WSO2_ISSUER}/authorize`,
        params: {
          response_type: "code",
          scope: "openid profile email"  // Add necessary scopes
        }
      },
      token: {
        url: `${process.env.WSO2_ISSUER}/token`,
      },
      userinfo: {
        url: `${process.env.WSO2_ISSUER}/userinfo`,
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async redirect({ url, baseUrl }) {
      return url.startsWith(baseUrl) ? url : baseUrl;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
});
