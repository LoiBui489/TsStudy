export {}

export type Role = "admin" | "moderator";

declare global {
    interface CustomJwtSessionTokenClaims {
        metadata: {
            role?: Role
        }
    }
}