import { withAuth } from "next-auth/middleware";

export default withAuth({
    pages: {
        signIn: "/auth"
    }
});

export const config = {
    matcher: [
        "/users/:path*",
        "/conversations/:path*",
        "/campaignRequest/:path*"
    ]
}