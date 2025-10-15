import { auth, clerkClient } from "@clerk/nextjs/server";
import { Role } from "../../../types/global";
import { revalidatePath } from "next/cache";

export async function setRole(formData: FormData) {
    const { sessionClaims } = await auth();

    if ((sessionClaims?.metadata as { role?: Role })?.role !== "admin") {
        throw new Error("Unauthorized");
    }

    const client = await clerkClient();
    const id = formData.get("id") as string;
    const role = formData.get("role") as Role;

    try {
        await client.users.updateUser(id, {
            publicMetadata: { role: role }
        });
        revalidatePath("/admin");
    } catch {
        throw new Error("Failed to set role");
    }
}

export async function removeRole(formData: FormData) {
    const { sessionClaims } = await auth();

    if ((sessionClaims?.metadata as { role?: Role })?.role !== "admin") {
        throw new Error("Unauthorized");
    }

    const client = await clerkClient();
    const id = formData.get("id") as string;

    try {
        await client.users.updateUser(id, {
            publicMetadata: { role: null }
        });
        revalidatePath("/admin");
    } catch {
        throw new Error("Failed to remove role");
    }
}