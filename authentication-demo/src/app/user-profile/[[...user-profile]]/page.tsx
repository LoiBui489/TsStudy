import { UserProfile } from "@clerk/nextjs";

export default function UserProfilepage() {
    return (
        <div>
            <UserProfile path="/user-profile" />
        </div>
    );
};
