import { clerkClient } from "@clerk/nextjs/server";
import { removeRole, setRole } from "./actions";

export default async function AdminHome() {
    const client = await clerkClient();
    const users = (await client.users.getUserList()).data;

    return (
        <>
            <h1>Admin Only Page</h1>;
            {users.map((user) => (
                <div key={user.id} className="flex items-center justify-between gap-4 p-4">
                    <div className="flex gap-8">
                        <div>
                            {user.firstName} {user.lastName}
                        </div>
                        <div>
                            {
                                user.emailAddresses.find((email) => email.id === user.primaryEmailAddressId)?.emailAddress
                            }
                        </div>
                        <div>{user.publicMetadata.role as string}</div>
                    </div>
                    <div className="flex gap-2">
                        <form action={setRole} className="inline">
                            <input type="hidden" name="id" value={user.id} />
                            <input type="hidden" name="role" value="admin" />
                            <button type="submit" 
                                    className="px-2 py-1 text-sm border">Make Admin</button>
                        </form>
                        <form action={setRole} className="inline">
                            <input type="hidden" name="id" value={user.id} />
                            <input type="hidden" name="role" value="moderator" />
                            <button type="submit" 
                                    className="px-2 py-1 text-sm border">Make Moderator</button>
                        </form>
                        <form action={removeRole} className="inline">
                            <input type="hidden" name="id" value={user.id} />
                            <button type="submit" 
                                    className="px-2 py-1 text-sm border">Remove Role</button>
                        </form>
                    </div>
                </div>
            ))}
        </>
    );
};
